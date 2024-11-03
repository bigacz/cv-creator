function ExperienceEditor({ jobs, handleChange, handleAdd, handleRemove }) {
  const isRemoveButtonAdded = jobs.length > 1;

  const jobFieldsets = jobs.map((job) => {
    const {
      id,
      companyName,
      positionTitle,
      responsibilities,
      yearStarted,
      yearEnded,
      isEnded,
    } = job;

    return (
      <fieldset key={id} data-index={id}>
        <label>
          Company name:
          <input
            type="text"
            value={companyName}
            onChange={(event) => {
              handleChange(id, 'companyName', event.target.value);
            }}
          />
        </label>
        <label>
          Position title:
          <input
            type="text"
            value={positionTitle}
            onChange={(event) => {
              handleChange(id, 'positionTitle', event.target.value);
            }}
          />
        </label>
        <label>
          Responsibilities:
          <input
            type="text"
            value={responsibilities}
            onChange={(event) => {
              handleChange(id, 'responsibilities', event.target.value);
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
          Still working:
          <input
            type="checkbox"
            checked={isEnded}
            onChange={(event) => {
              handleChange(id, 'isEnded', event.target.checked);
            }}
          />
        </label>
        {isRemoveButtonAdded && (
          <button
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
    <fieldset>
      {jobFieldsets}
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </fieldset>
  );
}

export default ExperienceEditor;
