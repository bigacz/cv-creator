import { isValidElement } from 'react';
import 'styles/components/editor/EditorSection.css';

function EditorSection({ inputsParameters }) {
  const labeledInputs = inputsParameters.map((inputData) => {
    const {
      name,
      value,
      width = 2,
      column,
      labelTitle,
      type,
      handleChange,
      attributes,
      element,
    } = inputData;

    let labelClasses = [
      'editor-section__label',
      `editor-section__label--width-${width}`,
      column && `editor-section__label--column-${column}`,
    ];

    if (isValidElement(element)) {
      const classes = labelClasses.join(' ');

      return (
        <label key={labelTitle} className={classes}>
          <span>{labelTitle}:</span>
          {element}
        </label>
      );
    }

    let inputAttributes = {};
    const isCheckbox = type === 'checkbox';

    if (isCheckbox) {
      inputAttributes = {
        ...attributes,
        checked: value,
        onChange: (event) => {
          handleChange(event.currentTarget.checked);
        },
      };

      labelClasses.push('editor-section__label--checkbox');
    } else {
      inputAttributes = {
        ...attributes,
        value: value,
        onChange: (event) => {
          handleChange(event.currentTarget.value);
        },
      };

      labelClasses.push('editor-section__label--regular');
    }

    labelClasses = labelClasses.join(' ');

    return (
      <label key={labelTitle} className={labelClasses}>
        <span>{labelTitle}:</span>
        <input type={type} name={name} {...inputAttributes} />
      </label>
    );
  });

  return <div className="editor-section">{labeledInputs}</div>;
}

export default EditorSection;
