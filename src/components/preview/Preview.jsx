import 'styles/components/preview/Preview.css';

import Button from 'components/shared/Button';

import GeneralPreview from 'components/preview/GeneralPreview';
import ExperiencePreview from 'components/preview/ExperiencePreview';
import EducationPreview from 'components/preview/EducationPreview';

function Preview({ cvData, handlePreviewClose }) {
  const { credentials, schools, jobs } = cvData;

  return (
    <div className="preview">
      <div className="preview__wrapper">
        <GeneralPreview credentials={credentials} />
        <ExperiencePreview jobs={jobs} />
        <EducationPreview schools={schools} />
        <Button handleClick={handlePreviewClose} text="Close" />
      </div>
    </div>
  );
}

export default Preview;
