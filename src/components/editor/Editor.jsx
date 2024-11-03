import EducationEditor from './EducationEditor';
import ExperienceEditor from './ExperienceEditor';
import GeneralEditor from './GeneralEditor';

function Editor({ cvData, handlers }) {
  const { credentials, schools, jobs } = cvData;
  const {
    handleCredentialsChange,
    handleSchoolsChange,
    handleAddSchool,
    handleRemoveSchool,
    handleJobsChange,
    handleAddJob,
    handleRemoveJob,
    handleOpenPreview,
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
        handleAdd={handleAddSchool}
        handleRemove={handleRemoveSchool}
      />
      <ExperienceEditor
        jobs={jobs}
        handleChange={handleJobsChange}
        handleAdd={handleAddJob}
        handleRemove={handleRemoveJob}
      />
      <button type="button" onClick={handleOpenPreview}>
        Open preview
      </button>
    </div>
  );
}

export default Editor;
