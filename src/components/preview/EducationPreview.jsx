import 'styles/components/preview/EducationPreview.css';

function EducationPreview({ schools }) {
  const schoolSections = schools.map((school) => {
    const { id, schoolName, studyTitle, yearStarted, yearEnded, isActive } =
      school;

    const sectionPrefix = 'education-preview__schools__section__';

    return (
      <div key={id} className="education-preview__schools__section">
        <div className={`${sectionPrefix}school`}>{schoolName}</div>
        <div className={`${sectionPrefix}title`}>{studyTitle}</div>
        <div className={`${sectionPrefix}date`}>
          {yearStarted} - {isActive ? 'Present' : yearEnded}
        </div>
      </div>
    );
  });

  return (
    <div className="education-preview">
      <div className="education-preview__header">Education</div>
      <hr className="education-preview__line" />
      <div className="education-preview__schools">{schoolSections}</div>
    </div>
  );
}

export default EducationPreview;
