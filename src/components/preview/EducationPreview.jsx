import 'styles/components/preview/EducationPreview.css';

function EducationPreview({ schools }) {
  const schoolSections = schools.map((school) => {
    const { id, schoolName, studyTitle, yearStarted, yearEnded, isEnded } =
      school;

    return (
      <div key={id}>
        <p>{schoolName}</p>
        <p>{studyTitle}</p>
        <p>{yearStarted}</p>
        <p>{yearEnded}</p>
        <p>{isEnded}</p>
      </div>
    );
  });

  return <div>{schoolSections}</div>;
}

export default EducationPreview;
