import React from "react";

const viewerStyles = {
    minHeight: "150px",
    padding: "8px",
    fontFamily: "inherit",
};

export default function RichTextViewer({ value = "<p></p>" }) {
    return (
        <div className="rte-viewer" style={{ width: "100%" }}>
            <div
                style={viewerStyles}
                dangerouslySetInnerHTML={{ __html: value }}
            />
            <style>{`
                /* Headings */
                .rte-viewer h1 { font-size: 1.5rem; margin: 0.6em 0 0.3em; font-weight: 700; }
                .rte-viewer h2 { font-size: 1.25rem; margin: 0.6em 0 0.3em; font-weight: 700; }

                /* Paragraphs */
                .rte-viewer p { margin: 0.5em 0; }

                /* Lists */
                .rte-viewer ul {
                    list-style-type: disc;
                    padding-left: 1.5em;
                    margin: 0.5em 0;
                }
                .rte-viewer ol {
                    list-style-type: decimal;
                    padding-left: 1.5em;
                    margin: 0.5em 0;
                }
                .rte-viewer li {
                    margin: 0.25em 0;
                }

                /* Links */
                .rte-viewer a { color: #2563eb; text-decoration: underline; }

                /* Images */
                .rte-viewer img { max-width: 100%; height: auto; display: block; margin: 0.5em 0; }

                /* Blockquote */
                .rte-viewer blockquote {
                    border-left: 4px solid #ddd;
                    padding-left: 1em;
                    color: #555;
                    margin: 0.5em 0;
                    font-style: italic;
                    background: #f9f9f9;
                }

                /* Code blocks */
                .rte-viewer pre {
                    background: #f3f4f6;
                    padding: 0.5em;
                    border-radius: 4px;
                    overflow-x: auto;
                    margin: 0.5em 0;
                }
                .rte-viewer code { font-family: monospace; }

                /* Inline formatting */
                .rte-viewer b, .rte-viewer strong { font-weight: 700; }
                .rte-viewer i, .rte-viewer em { font-style: italic; }
                .rte-viewer u { text-decoration: underline; }

                /* Text alignment */
                .rte-viewer p, .rte-viewer h1, .rte-viewer h2, .rte-viewer li, .rte-viewer blockquote {
                    text-align: left; /* default */
                }
                .rte-viewer [align="center"] { text-align: center; }
                .rte-viewer [align="right"] { text-align: right; }
                .rte-viewer [align="justify"] { text-align: justify; }

                /* Preserve spacing in pre/code */
                .rte-viewer pre { white-space: pre-wrap; word-wrap: break-word; }
            `}</style>
        </div>
    );
}