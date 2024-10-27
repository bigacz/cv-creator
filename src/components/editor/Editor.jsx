import EducationEditor from './EducationEditor';
import ExperienceEditor from './ExperienceEditor';
import GeneralEditor from './GeneralEditor';

function Editor({ cvData, handlers }) {
  const { credentials } = cvData;
  const { handleCredentialsChange } = handlers;

  return (
    <div>
      <GeneralEditor
        credentials={credentials}
        handleChange={handleCredentialsChange}
      />
      <EducationEditor />
      <ExperienceEditor />
    </div>
  );
}

export default Editor;
