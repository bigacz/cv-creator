import 'styles/components/editor/Editor.css';

import GeneralEditor from 'components/editor/GeneralEditor.jsx';
import ExperienceEditor from 'components/editor/ExperienceEditor.jsx';
import EducationEditor from 'components/editor/EducationEditor.jsx';

import ConfirmModal from 'components/shared/ConfirmModal';

function Editor({ cvData, handlers }) {
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
  } = handlers;

  return (
    <div className="editor">
      <GeneralEditor
        credentials={credentials}
        handleChange={handleCredentialsChange}
      />
      <ExperienceEditor
        jobs={jobs}
        handleChange={handleJobsChange}
        handleAdd={handleJobsAdd}
        handleRemove={handleJobsRemove}
        handleDutiesChange={handleDutiesChange}
        handleDutiesAdd={handleDutiesAdd}
        handleDutiesRemove={handleDutiesRemove}
      />
      <EducationEditor
        schools={schools}
        handleChange={handleSchoolsChange}
        handleAdd={handleSchoolsAdd}
        handleRemove={handleSchoolsRemove}
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
        <button className="button" type="button" onClick={handlePreviewOpen}>
          Open preview
        </button>
      </div>
    </div>
  );
}

export default Editor;
