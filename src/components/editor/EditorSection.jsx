import 'styles/components/editor/EditorSection.css';

function EditorSection({ inputsParameters }) {
  const labeledInputs = inputsParameters.map((inputData) => {
    const {
      name,
      value,
      width = 2,
      labelTitle,
      type,
      handleChange,
    } = inputData;

    const widthClass = `editor-section__label--width-${width}`;
    const elementClasses = `editor-section__label label-input--regular ${widthClass} `;

    return (
      <label key={labelTitle} className={elementClasses}>
        <span>{labelTitle}:</span>
        <input
          type={type}
          value={value}
          name={name}
          onChange={(event) => {
            handleChange(event.currentTarget.value);
          }}
        />
      </label>
    );
  });

  return <fieldset className="editor-section">{labeledInputs}</fieldset>;
}

export default EditorSection;

// can possibly rename to something like inputList,

// Add a value that can receive html attributes and will attach it to an input

// Can include a title and a handler title
