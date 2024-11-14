import 'styles/components/editor/ExperienceEditor.css';

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
      <fieldset key={id}>
        <label>
          <span>Company name:</span>
          <input
            type="text"
            value={companyName}
            onChange={(event) => {
              handleChange(id, 'companyName', event.target.value);
            }}
          />
        </label>
        <label>
          <span>Position title:</span>
          <input
            type="text"
            value={positionTitle}
            onChange={(event) => {
              handleChange(id, 'positionTitle', event.target.value);
            }}
          />
        </label>
        <label>
          <span>Responsibilities:</span>
          <FlexInputList
            entries={duties}
            handleChange={handleDutiesChangeBinded}
            handleAdd={handleDutiesAddBinded}
            handleRemove={handleDutiesRemoveBinded}
          />
        </label>
        <label>
          <span>Year started:</span>
          <input
            type="number"
            value={yearStarted}
            onChange={(event) => {
              handleChange(id, 'yearStarted', event.target.value);
            }}
          />
        </label>
        <label>
          <span>Year ended:</span>
          <input
            type="number"
            value={yearEnded}
            onChange={(event) => {
              handleChange(id, 'yearEnded', event.target.value);
            }}
          />
        </label>
        <label>
          <span>Still working:</span>
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
