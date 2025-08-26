import { styles } from "./styles";

export default function ToolbarButton({ onClick, active, title, children }) {
    return (
        <button
        type="button"
        onClick={onClick}
        title={title}
        className={`rte-btn ${active ? "active" : ""}`}
        style={{ ...styles.button, ...(active ? styles.buttonActive : {}) }}
        >
        {children}
        </button>
    );
}
