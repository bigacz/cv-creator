import 'styles/components/editor/Editor.css';

import { useRef } from 'react';

import Button from 'components/shared/Button';

import GeneralEditor from 'components/editor/GeneralEditor.jsx';
import ExperienceEditor from 'components/editor/ExperienceEditor.jsx';
import EducationEditor from 'components/editor/EducationEditor.jsx';

import ConfirmModal from 'components/shared/ConfirmModal';

function Editor({ cvData, handlers, areEditorsOpen }) {
  const { isGeneralOpen, isExperienceOpen, isEducationOpen } = areEditorsOpen;
  const { credentials, schools, jobs } = cvData;
  const {
    handleCredentialsChange,

    handleJobsChange,
    handleJobsAdd,
    handleJobsRemove,

    handleDutiesChange,
    handleDutiesAdd,
    handleDutiesRemove,

    handleSchoolsChange,
    handleSchoolsAdd,
    handleSchoolsRemove,

    handlePreviewOpen,

    handleEditorClean,
    handleEditorFill,

    handleGeneralToggle,
    handleExperienceToggle,
    handleEducationToggle,
  } = handlers;
  const formRef = useRef(null);

  function handleSubmitRequest(event) {
    event.preventDefault();
    const form = formRef.current;

    const firstElement = [...form.elements].filter(
      (element) => !element.checkValidity()
    )[0];

    if (firstElement != null) {
      if (isHidden(firstElement)) {
        const editor = firstElement.getAttribute('data-editor');
        switch (editor) {
          case 'general':
            handleGeneralToggle();
            break;

          case 'experience':
            handleExperienceToggle();
            break;

          case 'education':
            handleEducationToggle();
            break;
        }
      }

      setTimeout(() => {
        firstElement.reportValidity();
      }, 0);
    } else {
      handlePreviewOpen();
    }
  }

  return (
    <form className="editor" ref={formRef}>
      <GeneralEditor
        credentials={credentials}
        handleChange={handleCredentialsChange}
        handleToggle={handleGeneralToggle}
        isOpen={isGeneralOpen}
      />

      <ExperienceEditor
        jobs={jobs}
        handleChange={handleJobsChange}
        handleAdd={handleJobsAdd}
        handleRemove={handleJobsRemove}
        handleDutiesChange={handleDutiesChange}
        handleDutiesAdd={handleDutiesAdd}
        handleDutiesRemove={handleDutiesRemove}
        handleToggle={handleExperienceToggle}
        isOpen={isExperienceOpen}
      />
      <EducationEditor
        schools={schools}
        handleChange={handleSchoolsChange}
        handleAdd={handleSchoolsAdd}
        handleRemove={handleSchoolsRemove}
        handleToggle={handleEducationToggle}
        isOpen={isEducationOpen}
      />
      <div className="editor__buttons-wrapper">
        <ConfirmModal
          handleConfirm={handleEditorClean}
          buttonText="Clear"
          questionText="Clear the editor?"
          resultText="This will remove all your current input."
        />
        <ConfirmModal
          handleConfirm={handleEditorFill}
          buttonText="Fill"
          questionText="Fill the editor?"
          resultText="This will remove all your current input."
        />
        <Button onClick={handleSubmitRequest} text="Generate" type="submit" />
      </div>
    </form>
  );
}

export default Editor;

function isHidden(element) {
  return element.offsetParent === null;
}
