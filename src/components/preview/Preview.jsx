import GeneralPreview from './GeneralPreview';
import EducationPreview from './EducationPreview';

function Preview({ cvData }) {
  const { credentials, schools } = cvData;

  return (
    <div>
      <GeneralPreview credentials={credentials} />
      <EducationPreview schools={schools} />
    </div>
  );
}

export default Preview;
