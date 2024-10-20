import EducationEditor from './EducationEditor';
import ExperienceEditor from './ExperienceEditor';
import GeneralEditor from './GeneralEditor';

function Editor() {
  return (
    <div>
      <GeneralEditor />
      <EducationEditor />
      <ExperienceEditor />
    </div>
  );
}

export default Editor;
