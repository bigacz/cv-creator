import EducationEditor from './EducationEditor';
import ExperienceEditor from './ExperienceEditor';
import GeneralEditor from './GeneralEditor';

import ConfirmModal from '../shared/ConfirmModal';

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
      <ConfirmModal confirmHandler={handleEditorClean} buttonText="Clear" />
      <button type="button" onClick={handlePreviewOpen}>
        Open preview
      </button>
    </div>
  );
}

export default Editor;
