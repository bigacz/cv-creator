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

    return (
      <div key={id}>
        <p>{companyName}</p>
        <p>{positionTitle}</p>
        <p>{duties}</p>
        <p>{yearStarted}</p>
        <p>{yearEnded}</p>
        <p>{isEnded}</p>
      </div>
    );
  });

  return <div>{jobSections}</div>;
}

export default ExperiencePreview;
