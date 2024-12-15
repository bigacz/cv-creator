import 'styles/components/editor/ExperienceEditor.css';

import FlexInputList from 'components/editor/FlexInputList';
import Button from 'components/shared/Button';

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
      isActive,
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
      <fieldset key={id} className="experience-editor__section">
        <label className="experience-editor__section__company label-input--regular">
          <span>Company name:</span>
          <input
            type="text"
            value={companyName}
            onChange={(event) => {
              handleChange(id, 'companyName', event.target.value);
            }}
          />
        </label>
        <label className="experience-editor__section__position label-input--regular">
          <span>Position title:</span>
          <input
            type="text"
            value={positionTitle}
            onChange={(event) => {
              handleChange(id, 'positionTitle', event.target.value);
            }}
          />
        </label>
        <label className="experience-editor__section__duties">
          <span>Responsibilities:</span>
          <FlexInputList
            entries={duties}
            handleChange={handleDutiesChangeBinded}
            handleAdd={handleDutiesAddBinded}
            handleRemove={handleDutiesRemoveBinded}
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
        <label className="experience-editor__section__present label-input--checkbox">
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
            className="experience-editor__section__remove button"
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
    <fieldset className="experience-editor">
      <h2>Work</h2>
      {jobFieldsets}
      <div>
        <Button handleClick={handleAdd} text="Add" type="add" />
      </div>
    </fieldset>
  );
}

export default ExperienceEditor;
