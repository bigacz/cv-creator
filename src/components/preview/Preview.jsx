import GeneralPreview from './GeneralPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';

function Preview({ cvData, handleClosePreview }) {
  const { credentials, schools, jobs } = cvData;

  return (
    <div>
      <GeneralPreview credentials={credentials} />
      <EducationPreview schools={schools} />
      <ExperiencePreview jobs={jobs} />
      <button type="button" onClick={handleClosePreview}>
        Close
      </button>
    </div>
  );
}

export default Preview;
