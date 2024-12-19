import 'styles/components/preview/GeneralPreview.css';

function GeneralPreview({ credentials }) {
  const { first, last, email, phone } = credentials;

  return (
    <div className="general-preview">
      <div className="general-preview__fullname">
        {first} {last}
      </div>
      <div className="general-preview__contact">
        {email} | {phone}
      </div>
    </div>
  );
}

export default GeneralPreview;
