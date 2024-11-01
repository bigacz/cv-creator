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
    </div>
  );
}

export default Editor;
