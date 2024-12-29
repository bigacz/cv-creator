import arrowDown from 'assets/arrow-down.svg';
import 'styles/components/editor/EditorToggler.css';

// Toggle
function EditorToggler({ isOpen, handleToggle, title }) {
  const buttonClass = isOpen
    ? 'editor-toggler--open'
    : 'editor-toggler--closed';

  return (
    <button
      className={`editor-toggler ${buttonClass}`}
      onClick={handleToggle}
      type="button"
    >
      <h2>{title}</h2>
      <img
        className="editor-toggler__arrow"
        src={arrowDown}
        alt={`Expand ${title}`}
      />
    </button>
  );
}

export default EditorToggler;
