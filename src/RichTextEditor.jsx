import { useEffect, useMemo, useRef, useState } from "react";
import { styles } from "./components/rich-text-editor";
import { css } from "./components/rich-text-editor";
import { closest, isTag } from "./components/rich-text-editor";
import { Toolbar } from "./components/rich-text-editor";

export default function RichTextEditor({
    value = "<p></p>",
    onChange,
    placeholder = "Write something…",
    allowRichPaste = false,
}) {
    const editorRef = useRef(null);
    const [html, setHtml] = useState(value);
    const [selectionState, setSelectionState] = useState({
        bold: false,
        italic: false,
        underline: false,
        h1: false,
        h2: false,
        ul: false,
        ol: false,
        link: false,
    });

    useEffect(() => {
        setHtml(value);
        if (editorRef.current && editorRef.current.innerHTML !== value) {
            editorRef.current.innerHTML = value || "<p></p>";
        }
    }, [value]);

    const emitChange = () => {
        const next = editorRef.current?.innerHTML || "";
        setHtml(next);
        onChange?.(next);
    };

    const runCmd = (cmd, arg = null) => {
        editorRef.current?.focus();
        document.execCommand(cmd, false, arg);
        emitChange();
        refreshSelectionState();
    };

    const actions = useMemo(
        () => ({
            bold: () => runCmd("bold"),
            italic: () => runCmd("italic"),
            underline: () => runCmd("underline"),
            h1: () => runCmd("formatBlock", "<H1>"),
            h2: () => runCmd("formatBlock", "<H2>"),
            paragraph: () => runCmd("formatBlock", "<P>"),
            ul: () => runCmd("insertUnorderedList"),
            ol: () => runCmd("insertOrderedList"),
            link: () => {
                const sel = document.getSelection();
                const hasSelection = sel && !sel.isCollapsed;
                let url = window.prompt("Enter URL (e.g., https://example.com):");
                if (!url) return;
                if (!/^https?:\/\//i.test(url)) url = "https://" + url;
                if (hasSelection) {
                    runCmd("createLink", url);
                } else {
                    runCmd(
                        "insertHTML",
                        `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
                    );
                }
            },
            unlink: () => runCmd("unlink"),
            image: () => {
                let url = window.prompt("Image URL:");
                if (!url) return;
                runCmd("insertImage", url);
            },
            alignLeft: () => runCmd("justifyLeft"),
            alignCenter: () => runCmd("justifyCenter"),
            alignRight: () => runCmd("justifyRight"),
            alignJustify: () => runCmd("justifyFull"),
        }),
        []
    );


    const refreshSelectionState = () => {
        const sel = document.getSelection();
        let anchor = sel && sel.anchorNode;
        if (!anchor) {
        return setSelectionState((s) => ({
            ...s,
            link: false,
            h1: false,
            h2: false,
            ul: false,
            ol: false,
        }));
        }
        if (anchor.nodeType === 3) anchor = anchor.parentNode;

        const inH1 = !!closest(anchor, (n) => isTag(n, ["H1"]));
        const inH2 = !!closest(anchor, (n) => isTag(n, ["H2"]));
        const inUL = !!closest(anchor, (n) => isTag(n, ["UL"]));
        const inOL = !!closest(anchor, (n) => isTag(n, ["OL"]));
        const inA = !!closest(anchor, (n) => isTag(n, ["A"]));

        const bold = document.queryCommandState("bold");
        const italic = document.queryCommandState("italic");
        const underline = document.queryCommandState("underline");

        setSelectionState({ bold, italic, underline, h1: inH1, h2: inH2, ul: inUL, ol: inOL, link: inA });
    };

    useEffect(() => {
        const handleSelection = () => refreshSelectionState();
        const el = editorRef.current;
        document.addEventListener("selectionchange", handleSelection);
        el?.addEventListener("keyup", handleSelection);
        el?.addEventListener("mouseup", handleSelection);
        return () => {
            document.removeEventListener("selectionchange", handleSelection);
            el?.removeEventListener("keyup", handleSelection);
            el?.removeEventListener("mouseup", handleSelection);
        };
    }, []);

    const handlePaste = (e) => {
        if (allowRichPaste) return;
        e.preventDefault();
        const text = e.clipboardData.getData("text/plain");
        document.execCommand("insertText", false, text);
    };

    const handleKeyDown = (e) => {
        const mod = e.ctrlKey || e.metaKey;
        if (!mod) return;
        if (e.key.toLowerCase() === "b") { e.preventDefault(); actions.bold(); }
        else if (e.key.toLowerCase() === "i") { e.preventDefault(); actions.italic(); }
        else if (e.key.toLowerCase() === "u") { e.preventDefault(); actions.underline(); }
    };

    return (
        <div className="rte-root" style={styles.root}>
            <Toolbar actions={actions} state={selectionState} />
            <div
                ref={editorRef}
                className="rte-editor"
                style={styles.editor}
                contentEditable
                suppressContentEditableWarning
                spellCheck
                data-placeholder={placeholder}
                onInput={emitChange}
                onPaste={handlePaste}
                onKeyDown={handleKeyDown}
            />
            <textarea value={html} readOnly style={styles.hiddenTextarea} aria-hidden="true" />
            <style>{css}</style>
        </div>
    );
}