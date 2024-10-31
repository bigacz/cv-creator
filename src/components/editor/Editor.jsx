import EducationEditor from './EducationEditor';
import ExperienceEditor from './ExperienceEditor';
import GeneralEditor from './GeneralEditor';

function Editor({ cvData, handlers }) {
  const { credentials, schools } = cvData;
  const {
    handleCredentialsChange,
    handleSchoolsChange,
    handleAddSchool,
    handleRemoveSchool,
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
      <ExperienceEditor />
    </div>
  );
}

export default Editor;
