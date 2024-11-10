import FlexInputList from 'components/editor/FlexInputList';

function ExperienceEditor({
  jobs,
  handleChange,
  handleAdd,
  handleRemove,
  handleDutiesChange,
  handleDutiesAdd,
  handleDutiesRemove,
}) {
  const isRemoveButtonAdded = jobs.length > 1;

  const jobFieldsets = jobs.map((job) => {
    const {
      id,
      companyName,
      positionTitle,
      duties,
      yearStarted,
      yearEnded,
      isEnded,
    } = job;

    function handleDutiesChangeBinded(dutyId, value) {
      handleDutiesChange(id, dutyId, value);
    }

    function handleDutiesAddBinded() {
      handleDutiesAdd(id);
    }

    function handleDutiesRemoveBinded(dutyId) {
      handleDutiesRemove(id, dutyId);
    }

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
          <FlexInputList
            entries={duties}
            handleChange={handleDutiesChangeBinded}
            handleAdd={handleDutiesAddBinded}
            handleRemove={handleDutiesRemoveBinded}
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
