function ExperiencePreview({ jobs }) {
  const jobSections = jobs.map((job) => {
    const {
      id,
      companyName,
      positionTitle,
      responsibilities,
      yearStarted,
      yearEnded,
      isEnded,
    } = job;

    return (
      <div key={id}>
        <p>{companyName}</p>
        <p>{positionTitle}</p>
        <p>{responsibilities}</p>
        <p>{yearStarted}</p>
        <p>{yearEnded}</p>
        <p>{isEnded}</p>
      </div>
    );
  });

  return <div>{jobSections}</div>;
}

export default ExperiencePreview;
