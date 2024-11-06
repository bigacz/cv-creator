function ExperiencePreview({ jobs }) {
  const jobSections = jobs.map((job) => {
    const {
      id,
      companyName,
      positionTitle,
      duties,
      yearStarted,
      yearEnded,
      isEnded,
    } = job;

    const dutiesList = duties.map((duty) => {
      return <p key={duty.id}>{duty.value}</p>;
    });

    return (
      <div key={id}>
        <p>{companyName}</p>
        <p>{positionTitle}</p>
        {dutiesList}
        <p>{yearStarted}</p>
        <p>{yearEnded}</p>
        <p>{isEnded}</p>
      </div>
    );
  });

  return <div>{jobSections}</div>;
}

export default ExperiencePreview;
