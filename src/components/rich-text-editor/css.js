export const css = `
.rte-editor h1 { font-size: 1.5rem; margin: 0.6em 0 0.3em; font-weight: 700; }
.rte-editor h2 { font-size: 1.25rem; margin: 0.6em 0 0.3em; font-weight: 700; }
.rte-editor p { margin: 0.4em 0; }

.rte-editor ul { 
  list-style-type: disc; 
  padding-left: 1.5rem; 
  margin: 0.6em 0; 
}
.rte-editor ol { 
  list-style-type: decimal; 
  padding-left: 1.5rem; 
  margin: 0.6em 0; 
}

.rte-editor a { color: #2563eb; text-decoration: underline; }
.rte-btn:hover { background: #f3f4f6; }
.rte-btn.active { background: #eef2ff; border-color: #c7d2fe; }
.rte-editor img { max-width: 100%; height: auto; display: inline-block; }
.rte-editor:empty::before { content: attr(data-placeholder); color: #9ca3af; pointer-events: none; }
`;
