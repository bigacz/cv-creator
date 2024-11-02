import GeneralPreview from './GeneralPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

function Preview({ cvData }) {
  const { credentials, schools, jobs } = cvData;

  return (
    <div>
      <GeneralPreview credentials={credentials} />
      <EducationPreview schools={schools} />
      <ExperiencePreview jobs={jobs} />
    </div>
  );
}

export default Preview;
