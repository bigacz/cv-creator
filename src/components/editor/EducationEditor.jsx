import 'styles/components/editor/EducationEditor.css';

function EducationEditor({ schools, handleChange, handleAdd, handleRemove }) {
  const isRemoveButtonAdded = schools.length > 1;

  const schoolFieldsets = schools.map((school) => {
    const { id, schoolName, studyTitle, yearStarted, yearEnded, isActive } =
      school;

    return (
      <fieldset key={id} className="education-editor__section">
        <label className="education-editor__section__name label-input--regular">
          <span>School name:</span>
          <input
            type="text"
            value={schoolName}
            onChange={(event) => {
              handleChange(id, 'schoolName', event.target.value);
            }}
          />
        </label>
        <label className="education-editor__section__title label-input--regular">
          <span>Title of study:</span>
          <input
            type="text"
            value={studyTitle}
            onChange={(event) => {
              handleChange(id, 'studyTitle', event.target.value);
            }}
          />
        </label>
        <label className="label-input--regular">
          <span>Year started:</span>
          <input
            type="number"
            value={yearStarted}
            onChange={(event) => {
              handleChange(id, 'yearStarted', event.target.value);
            }}
          />
        </label>
        <label className="label-input--regular">
          <span>Year ended:</span>
          <input
            type="number"
            disabled={isActive}
            value={isActive ? '' : yearEnded}
            onChange={(event) => {
              handleChange(id, 'yearEnded', event.target.value);
            }}
          />
        </label>
        <label className="education-editor__section__present label-input--checkbox">
          <span>Current:</span>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(event) => {
              handleChange(id, 'isActive', event.target.checked);
            }}
          />
        </label>
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
