export const htmlToText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html || "";
    return (div.textContent || "").trim();
};

export const basicSanitize = (dirtyHtml) => {
    const allowed = new Set(["H1","H2","P","UL","OL","LI","A","B","I","U","STRONG","EM","IMG","BR"]);
    const div = document.createElement("div");
    div.innerHTML = dirtyHtml;

    const walk = (node) => {
        if (node.nodeType === 1) {
            if (!allowed.has(node.tagName)) {
                const parent = node.parentNode;
                while (node.firstChild) parent.insertBefore(node.firstChild, node);
                parent.removeChild(node);
                return;
            }
            [...node.attributes].forEach((attr) => {
                const name = attr.name.toLowerCase();
                if (node.tagName === "A" && name === "href") {
                    if (!/^(https?:)?\/\//i.test(attr.value)) node.setAttribute("href", "#");
                    node.setAttribute("rel", "noopener noreferrer");
                    node.setAttribute("target", "_blank");
                } else if (node.tagName === "IMG" && name === "src") {
                    } else if (name.startsWith("on")) {
                        node.removeAttribute(attr.name);
                    } else if (!["href", "src", "rel", "target"].includes(name)) {
                    node.removeAttribute(attr.name);
                }
            });
        }
        [...node.childNodes].forEach(walk);
    };

    [...div.childNodes].forEach(walk);
    return div.innerHTML;
};

export const isTag = (node, tagNames = []) =>
  node && node.nodeType === 1 && tagNames.includes(node.tagName);

export const closest = (node, predicate) => {
    while (node) {
        if (predicate(node)) return node;
        node = node.parentNode;
    }
    return null;
};
