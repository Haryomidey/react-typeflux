export const styles = {
    root: {
        border: "1px solid #e5e7eb",
        borderRadius: 12,
        overflow: "hidden",
        background: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
        fontFamily: "system-ui, sans-serif",
    },
    toolbar: {
        display: "flex",
        gap: 6,
        padding: "8px 10px",
        alignItems: "center",
        borderBottom: "1px solid #f1f5f9",
        background: "#fafafa",
        flexWrap: "wrap",
    },
    sep: {
        width: 1,
        height: 22,
        background: "#e5e7eb",
        margin: "0 4px",
    },
    editor: {
        padding: "14px 16px",
        minHeight: 220,
        outline: "none",
        lineHeight: 1.6,
    },
    button: {
        border: "1px solid #e5e7eb",
        background: "#ffffff",
        padding: "6px 10px",
        borderRadius: 10,
        fontSize: 14,
        cursor: "pointer",
    },
    buttonActive: {
        background: "#eef2ff",
        borderColor: "#c7d2fe",
    },
    hiddenTextarea: { display: "none" },
};
