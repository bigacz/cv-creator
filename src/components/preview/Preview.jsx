import GeneralPreview from './GeneralPreview';

function Preview({ cvData }) {
  const { credentials } = cvData;

  return <GeneralPreview credentials={credentials} />;
}

export default Preview;
