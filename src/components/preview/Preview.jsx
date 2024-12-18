import 'styles/components/preview/Preview.css';

import GeneralPreview from 'components/preview/GeneralPreview';
import ExperiencePreview from 'components/preview/ExperiencePreview';
import EducationPreview from 'components/preview/EducationPreview';

function Preview({ cvData, handlePreviewClose }) {
  const { credentials, schools, jobs } = cvData;

  return (
    <div>
      <GeneralPreview credentials={credentials} />
      <ExperiencePreview jobs={jobs} />
      <EducationPreview schools={schools} />
      <button type="button" onClick={handlePreviewClose}>
        Close
      </button>
    </div>
  );
}

export default Preview;
