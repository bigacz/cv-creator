import 'styles/components/editor/EducationEditor.css';
import { useState } from 'react';

import Button from 'components/shared/Button';
import EditorSection from 'components/editor/EditorSection';
import EditorToggler from 'components/editor/EditorToggler';

function EducationEditor({ schools, handleChange, handleAdd, handleRemove }) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleEditor() {
    setIsOpen(!isOpen);
  }

  const isRemoveButtonAdded = schools.length > 1;

  const schoolFieldsets = schools.map((school) => {
    const { id, schoolName, studyTitle, yearStarted, yearEnded, isActive } =
      school;

    const inputsParameters = [
      {
        name: 'schoolName',
        value: schoolName,
        type: 'text',
        labelTitle: 'School name',
        width: 2,
      },
      {
        name: 'studyTitle',
        value: studyTitle,
        type: 'text',
        labelTitle: 'Title of study',
        width: 2,
      },
      {
        name: 'yearStarted',
        value: yearStarted,
        type: 'number',
        labelTitle: 'Year started',
        width: 1,
      },
      {
        name: 'yearEnded',
        value: !isActive ? yearEnded : '',
        type: 'number',
        labelTitle: 'Year ended',
        width: 1,
        attributes: {
          disabled: isActive,
        },
      },
      {
        name: 'isActive',
        value: isActive,
        type: 'checkbox',
        labelTitle: 'Current',
        column: 2,
      },
    ];

    inputsParameters.forEach((input) => {
      const name = input.name;

      input.handleChange = function (value) {
        handleChange(id, name, value);
      };
    });

    function handleRemoveBinded() {
      handleRemove(id);
    }

    return (
      <fieldset key={id} className="education-editor__section">
        <EditorSection inputsParameters={inputsParameters} />
        {isRemoveButtonAdded && (
          <div className="education-editor__section__remove">
            <Button
              handleClick={handleRemoveBinded}
              text="Remove"
              type="remove"
            />
          </div>
        )}
      </fieldset>
    );
  });

  return (
    <fieldset className="education-editor">
      <EditorToggler
        isOpen={isOpen}
        handleToggle={toggleEditor}
        title="Education"
      />

      {isOpen && (
        <div>
          {schoolFieldsets}
          <div>
            <Button handleClick={handleAdd} text="Add" type="add" />
          </div>
        </div>
      )}
    </fieldset>
  );
}

export default EducationEditor;
