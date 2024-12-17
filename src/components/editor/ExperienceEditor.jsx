import 'styles/components/editor/ExperienceEditor.css';
import { useState } from 'react';

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
}) {
  const [isOpen, setIsOpen] = useState(true);

  function toggleEditor() {
    setIsOpen(!isOpen);
  }

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

    const inputsParameters = [
      {
        name: 'companyName',
        value: companyName,
        type: 'text',
        labelTitle: 'Company name',
      },
      {
        name: 'positionTitle',
        value: positionTitle,
        type: 'text',
        labelTitle: 'Position title',
      },
      {
        labelTitle: 'Responsibilities',
        element: (
          <FlexInputList
            entries={duties}
            handleChange={handleDutiesChangeBinded}
            handleAdd={handleDutiesAddBinded}
            handleRemove={handleDutiesRemoveBinded}
          />
        ),
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

    return (
      <div key={id} className="experience-editor__section">
        <EditorSection inputsParameters={inputsParameters} />
        {isRemoveButtonAdded && (
          <div className="experience-editor__section__remove">
            <Button handleClick={handleRemoveBinded} type="remove" />
          </div>
        )}
      </div>
    );
  });

  return (
    <fieldset className="experience-editor">
      <EditorToggler isOpen={isOpen} handleToggle={toggleEditor} title="Work" />

      {isOpen && (
        <div>
          {jobFieldsets}
          <div>
            <Button handleClick={handleAdd} type="add" />
          </div>
        </div>
      )}
    </fieldset>
  );
}

export default ExperienceEditor;
