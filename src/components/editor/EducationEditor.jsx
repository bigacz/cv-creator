function EducationEditor({ schools, handleChange }) {
  const schoolFieldsets = schools.map((school) => {
    const { id, schoolName, studyTitle, yearStarted, yearEnded, isEnded } =
      school;

    return (
      <fieldset key={id} data-index={id}>
        <label>
          School name:
          <input
            type="text"
            value={schoolName}
            onChange={(event) => {
              handleChange(id, 'schoolName', event.target.value);
            }}
          />
        </label>
        <label>
          Title of study:
          <input
            type="text"
            value={studyTitle}
            onChange={(event) => {
              handleChange(id, 'studyTitle', event.target.value);
            }}
          />
        </label>
        <label>
          Year started:
          <input
            type="number"
            value={yearStarted}
            onChange={(event) => {
              handleChange(id, 'yearStarted', event.target.value);
            }}
          />
        </label>
        <label>
          Year ended:
          <input
            type="number"
            value={yearEnded}
            onChange={(event) => {
              handleChange(id, 'yearEnded', event.target.value);
            }}
          />
        </label>
        <label>
          Still attending:
          <input
            type="checkbox"
            checked={isEnded}
            onChange={(event) => {
              handleChange(id, 'isEnded', event.target.checked);
            }}
          />
        </label>
      </fieldset>
    );
  });

  return <fieldset>{schoolFieldsets}</fieldset>;
}

export default EducationEditor;
