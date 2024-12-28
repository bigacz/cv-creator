import { isValidElement } from 'react';
import 'styles/components/editor/EditorSection.css';

function EditorSection({ inputsAttributes }) {
  const attributesArray = Object.values(inputsAttributes);

  const labeledInputs = attributesArray.map((inputData) => {
    const {
      name,
      value,
      width = 2,
      column,
      labelTitle,
      type,
      handleChange,
      element,
      ...attributes
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

    let finalAttributes = { required: true };
    const isCheckbox = type === 'checkbox';

    if (isCheckbox) {
      finalAttributes = {
        ...finalAttributes,
        ...attributes,
        checked: value,
        onChange: (event) => {
          handleChange(event.currentTarget.checked);
        },
      };

      labelClasses.push('editor-section__label--checkbox');
    } else {
      finalAttributes = {
        ...finalAttributes,
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
        <input type={type} name={name} {...finalAttributes} />
      </label>
    );
  });

  return <div className="editor-section">{labeledInputs}</div>;
}

export default EditorSection;
