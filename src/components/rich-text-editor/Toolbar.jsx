import ToolbarButton from "./ToolbarButton";
import { styles } from "./styles";
import { 
    FiBold, 
    FiItalic, 
    FiUnderline, 
    FiType, 
    FiList, 
    FiLink, 
    FiLink2, 
    FiImage, 
    FiAlignLeft, 
    FiAlignCenter, 
    FiAlignRight, 
    FiAlignJustify, 
} from "react-icons/fi";

export default function Toolbar({ actions, state }) {
    return (
        <div
            className="rte-toolbar"
            style={styles.toolbar}
            role="toolbar"
            aria-label="Editor toolbar"
        >
            <ToolbarButton onClick={actions.bold} active={state.bold} title="Bold">
                <FiBold />
            </ToolbarButton>
            <ToolbarButton onClick={actions.italic} active={state.italic} title="Italic">
                <FiItalic />
            </ToolbarButton>
            <ToolbarButton onClick={actions.underline} active={state.underline} title="Underline">
                <FiUnderline />
            </ToolbarButton>

            <div style={styles.sep} />

            <ToolbarButton onClick={actions.h1} active={state.h1} title="Heading 1">
                H1
            </ToolbarButton>
            <ToolbarButton onClick={actions.h2} active={state.h2} title="Heading 2">
                H2
            </ToolbarButton>
            <ToolbarButton
                onClick={actions.paragraph}
                active={!state.h1 && !state.h2}
                title="Paragraph"
            >
                ¶
            </ToolbarButton>

            <div style={styles.sep} />

            <ToolbarButton onClick={actions.ul} active={state.ul} title="Bulleted List">
                <FiList />
            </ToolbarButton>
            <ToolbarButton onClick={actions.ol} active={state.ol} title="Numbered List">
                <FiType />
            </ToolbarButton>

            <div style={styles.sep} />

            <ToolbarButton onClick={actions.link} active={state.link} title="Insert Link">
                <FiLink />
            </ToolbarButton>
            {state.link && (
                <ToolbarButton onClick={actions.unlink} title="Remove Link">
                    <FiLink2 />
                </ToolbarButton>
            )}
            <ToolbarButton onClick={actions.image} title="Insert Image">
                <FiImage />
            </ToolbarButton>

            <div style={styles.sep} />

            <ToolbarButton onClick={actions.alignLeft} title="Align Left">
                <FiAlignLeft />
            </ToolbarButton>
            <ToolbarButton onClick={actions.alignCenter} title="Align Center">
                <FiAlignCenter />
            </ToolbarButton>
            <ToolbarButton onClick={actions.alignRight} title="Align Right">
                <FiAlignRight />
            </ToolbarButton>
            <ToolbarButton onClick={actions.alignJustify} title="Justify">
                <FiAlignJustify />
            </ToolbarButton>
        </div>
    );
}