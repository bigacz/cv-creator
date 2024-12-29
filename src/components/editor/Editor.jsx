import 'styles/components/editor/Editor.css';

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

  function handleFormSubmit(event) {
    event.preventDefault();
    handlePreviewOpen();
  }

  return (
    <form className="editor" onSubmit={handleFormSubmit}>
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
        <button className="button" type="submit">
          Generate
        </button>
      </div>
    </form>
  );
}

export default Editor;
