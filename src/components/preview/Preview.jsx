import 'styles/components/preview/Preview.css';

import { useRef } from 'react';

import { printPdf } from 'src/utilities';

import Button from 'components/shared/Button';

import GeneralPreview from 'components/preview/GeneralPreview';
import ExperiencePreview from 'components/preview/ExperiencePreview';
import EducationPreview from 'components/preview/EducationPreview';

function Preview({ cvData, handlePreviewClose }) {
  const { credentials, schools, jobs } = cvData;
  const previewPageRef = useRef(null);

  function handlePrint() {
    printPdf(previewPageRef.current);
  }

  return (
    <div className="preview">
      <div className="preview__page" ref={previewPageRef}>
        <GeneralPreview credentials={credentials} />
        <ExperiencePreview jobs={jobs} />
        <EducationPreview schools={schools} />
      </div>
      <div className="preview__buttons-wrapper">
        <Button handleClick={handlePreviewClose} text="Close" />
        <Button handleClick={handlePrint} text="Print" />
      </div>
    </div>
  );
}

export default Preview;
