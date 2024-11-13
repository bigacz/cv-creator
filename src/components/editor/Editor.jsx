import 'styles/components/editor/Editor.css';

import EducationEditor from 'components/editor/EducationEditor.jsx';
import ExperienceEditor from 'components/editor/ExperienceEditor.jsx';
import GeneralEditor from 'components/editor/GeneralEditor.jsx';

import ConfirmModal from 'components/shared/ConfirmModal';

function Editor({ cvData, handlers }) {
  const { credentials, schools, jobs } = cvData;
  const {
    handleCredentialsChange,

    handleSchoolsChange,
    handleSchoolsAdd,
    handleSchoolsRemove,

    handleJobsChange,
    handleJobsAdd,
    handleJobsRemove,

    handleDutiesChange,
    handleDutiesAdd,
    handleDutiesRemove,

    handlePreviewOpen,

    handleEditorClean,
  } = handlers;

  return (
    <div>
      <GeneralEditor
        credentials={credentials}
        handleChange={handleCredentialsChange}
      />
      <EducationEditor
        schools={schools}
        handleChange={handleSchoolsChange}
        handleAdd={handleSchoolsAdd}
        handleRemove={handleSchoolsRemove}
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
      <ConfirmModal handleConfirm={handleEditorClean} buttonText="Clear" />
      <button type="button" onClick={handlePreviewOpen}>
        Open preview
      </button>
    </div>
  );
}

export default Editor;
