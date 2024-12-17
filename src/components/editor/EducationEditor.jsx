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
      },
      {
        name: 'studyTitle',
        value: studyTitle,
        type: 'text',
        labelTitle: 'Title of study',
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
      <div key={id} className="education-editor__section">
        <EditorSection inputsParameters={inputsParameters} />
        {isRemoveButtonAdded && (
          <div className="education-editor__section__remove">
            <Button handleClick={handleRemoveBinded} type="remove" />
          </div>
        )}
      </div>
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
            <Button handleClick={handleAdd} type="add" />
          </div>
        </div>
      )}
    </fieldset>
  );
}

export default EducationEditor;
