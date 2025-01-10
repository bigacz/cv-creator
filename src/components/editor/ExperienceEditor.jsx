import 'styles/components/editor/ExperienceEditor.css';

import { experienceAttributes } from 'src/data/inputsAttributes';
import { isYearWithinRange, mergeInputsAttributes } from 'src/utilities';

import FlexInputList from 'components/editor/FlexInputList';
import Button from 'components/shared/Button';
import EditorSection from 'components/editor/EditorSection';
import EditorToggler from 'components/editor/EditorToggler';

function ExperienceEditor({
  jobs,
  handleChange,
  handleAdd,
  handleRemove,
  handleDutiesChange,
  handleDutiesAdd,
  handleDutiesRemove,

  handleToggle,
  isOpen,
}) {
  const isRemoveButtonAdded = jobs.length > 1;

  const jobFieldsets = jobs.map((job) => {
    const { id, duties, isActive, yearStarted } = job;

    const handleChangeBinded = function (name, value) {
      handleChange(id, name, value);
    };

    function handleDutiesChangeBinded(dutyId, value) {
      handleDutiesChange(id, dutyId, value);
    }

    function handleDutiesAddBinded() {
      handleDutiesAdd(id);
    }

    function handleDutiesRemoveBinded(dutyId) {
      handleDutiesRemove(id, dutyId);
    }

    function handleRemoveBinded() {
      handleRemove(id);
    }

    const inputsAttributes = mergeInputsAttributes(
      experienceAttributes,
      job,
      handleChangeBinded
    );

    inputsAttributes.responsibilities.element = (
      <FlexInputList
        entries={duties}
        handleChange={handleDutiesChangeBinded}
        handleAdd={handleDutiesAddBinded}
        handleRemove={handleDutiesRemoveBinded}
        minLength="2"
        maxLength="250"
      />
    );

    if (isActive) {
      inputsAttributes.yearEnded.required = false;
      inputsAttributes.yearEnded.disabled = true;
      inputsAttributes.yearEnded.value = '';
    }

    if (isYearWithinRange(yearStarted)) {
      inputsAttributes.yearEnded.min = yearStarted;
    }

    return (
      <div key={id} className="experience-editor__wrapper__section">
        <EditorSection inputsAttributes={inputsAttributes} />
        {isRemoveButtonAdded && (
          <div className="experience-editor__wrapper__section__remove">
            <Button handleClick={handleRemoveBinded} buttonType="remove" />
          </div>
        )}
      </div>
    );
  });

  const wrapperClasses = [
    'experience-editor__wrapper',
    !isOpen ? 'experience-editor__wrapper--hidden' : undefined,
  ]
    .join(' ')
    .trimEnd();

  return (
    <fieldset className="experience-editor">
      <EditorToggler isOpen={isOpen} handleToggle={handleToggle} title="Work" />

      <div className={wrapperClasses}>
        {jobFieldsets}
        <div className="experience-editor__wrapper__button-wrapper">
          <Button handleClick={handleAdd} text="Add Job" buttonType="add" />
        </div>
      </div>
    </fieldset>
  );
}

export default ExperienceEditor;
