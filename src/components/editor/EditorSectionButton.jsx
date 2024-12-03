import arrowDown from 'assets/arrow-down.svg';
import 'styles/components/editor/EditorSectionButton.css';

// Toggle
function EditorSectionButton({ isOpen, toggle, title }) {
  const buttonClass = isOpen
    ? 'editor-section-button--open'
    : 'editor-section-button--closed';

  return (
    <button className={`editor-section-button ${buttonClass}`} onClick={toggle}>
      <h2>{title}</h2>
      <img
        className="editor-section-button__arrow"
        src={arrowDown}
        alt={`Expand ${title}`}
      />
    </button>
  );
}

export default EditorSectionButton;
