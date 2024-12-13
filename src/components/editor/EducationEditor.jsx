import 'styles/components/editor/EducationEditor.css';
import EditorSection from 'components/editor/EditorSection';

function EducationEditor({ schools, handleChange, handleAdd, handleRemove }) {
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
        value: yearEnded,
        type: 'number',
        labelTitle: 'Year ended',
        width: 1,
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

    return (
      <fieldset key={id} className="education-editor__section">
        <EditorSection inputsParameters={inputsParameters} />
        {isRemoveButtonAdded && (
          <button
            className="education-editor__section__remove button"
            type="button"
            onClick={() => {
              handleRemove(id);
            }}
          >
            Remove
          </button>
        )}
      </fieldset>
    );
  });

  return (
    <fieldset className="education-editor">
      <h2>Education</h2>
      {schoolFieldsets}
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </fieldset>
  );
}

export default EducationEditor;
