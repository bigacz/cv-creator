import 'styles/components/editor/EducationEditor.css';

import { educationAttributes } from 'src/data/inputsAttributes';
import { isYearWithinRange, mergeInputsAttributes } from 'src/utilities';

import Button from 'components/shared/Button';
import EditorSection from 'components/editor/EditorSection';
import EditorToggler from 'components/editor/EditorToggler';

function EducationEditor({
  schools,
  handleChange,
  handleAdd,
  handleRemove,
  handleToggle,
  isOpen,
}) {
  const isRemoveButtonAdded = schools.length > 1;

  const schoolFieldsets = schools.map((school) => {
    const { id, isActive, yearStarted } = school;

    function handleRemoveBinded() {
      handleRemove(id);
    }

    const handleChangeBinded = function (name, value) {
      handleChange(id, name, value);
    };

    const inputsAttributes = mergeInputsAttributes(
      educationAttributes,
      school,
      handleChangeBinded
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
      <div key={id} className="education-editor__wrapper__section">
        <EditorSection inputsAttributes={inputsAttributes} />
        {isRemoveButtonAdded && (
          <div className="education-editor__wrapper__section__remove">
            <Button handleClick={handleRemoveBinded} type="remove" />
          </div>
        )}
      </div>
    );
  });

  const wrapperClasses = [
    'education-editor__wrapper',
    !isOpen ? 'education-editor__wrapper--hidden' : undefined,
  ]
    .join(' ')
    .trimEnd();

  return (
    <fieldset className="education-editor">
      <EditorToggler
        isOpen={isOpen}
        handleToggle={handleToggle}
        title="Education"
      />

      <div className={wrapperClasses}>
        {schoolFieldsets}
        <div>
          <Button handleClick={handleAdd} type="add" />
        </div>
      </div>
    </fieldset>
  );
}

export default EducationEditor;
