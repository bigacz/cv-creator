import GeneralPreview from 'components/preview/GeneralPreview';
import EducationPreview from 'components/preview/EducationPreview';
import ExperiencePreview from 'components/preview/ExperiencePreview';

function Preview({ cvData, handlePreviewClose }) {
  const { credentials, schools, jobs } = cvData;

  return (
    <div>
      <GeneralPreview credentials={credentials} />
      <EducationPreview schools={schools} />
      <ExperiencePreview jobs={jobs} />
      <button type="button" onClick={handlePreviewClose}>
        Close
      </button>
    </div>
  );
}

export default Preview;
