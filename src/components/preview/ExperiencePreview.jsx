import 'styles/components/preview/ExperiencePreview.css';

function ExperiencePreview({ jobs }) {
  const jobSections = jobs.map((job) => {
    const {
      id,
      companyName,
      positionTitle,
      duties,
      yearStarted,
      yearEnded,
      isActive,
    } = job;

    const dutiesList = duties.map((duty) => {
      return <li key={duty.id}>{duty.value}</li>;
    });

    const sectionPrefix = 'experience-preview__jobs__section__';

    return (
      <div key={id} className="experience-preview__jobs__section">
        <div className={`${sectionPrefix}company`}>{companyName}</div>
        <div className={`${sectionPrefix}position`}>{positionTitle}</div>
        <ul className={`${sectionPrefix}duties`}>{dutiesList}</ul>
        <div className={`${sectionPrefix}date`}>
          {yearStarted} - {isActive ? 'Present' : yearEnded}
        </div>
      </div>
    );
  });

  return (
    <div className="experience-preview">
      <div className="experience-preview__header">Experience</div>
      <hr className="experience-preview__line" />
      <div className="experience-preview__jobs">{jobSections}</div>
    </div>
  );
}

export default ExperiencePreview;
