import 'styles/components/CvCreator.css';

import { useState } from 'react';

import {
  defaultCredentials,
  defaultSchool,
  defaultJob,
  defaultDuty,
} from 'src/data/defaultCvValues';

import Editor from 'components/editor/Editor';
import Preview from 'components/preview/Preview';

function CvCreator() {
  const [credentials, setCredentials] = useState({ ...defaultCredentials });
  const [schools, setSchools] = useState([{ ...defaultSchool }]);
  const [jobs, setJobs] = useState([{ ...defaultJob }]);

  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const cvData = { credentials, schools, jobs };

  function handleCredentialsChange(name, event) {
    const value = event.target.value;

    const newCredentials = { ...credentials, [name]: value };

    setCredentials(newCredentials);
  }

  function handleSchoolsChange(id, name, value) {
    const editedSchoolIndex = schools.findIndex((e) => {
      return e.id == id;
    });

    const editedSchool = schools[editedSchoolIndex];

    const newSchool = { ...editedSchool, [name]: value };
    const newSchools = schools.toSpliced(editedSchoolIndex, 1, newSchool);

    setSchools(newSchools);
  }

  function handleSchoolsAdd() {
    const highestId = findHighestId(schools);

    const newSchool = { ...defaultSchool, id: highestId + 1 };

    const newSchools = [...schools, newSchool];

    setSchools(newSchools);
  }

  function handleSchoolsRemove(id) {
    const schoolIndex = schools.findIndex((element) => element.id === id);
    const newSchools = schools.toSpliced(schoolIndex, 1);

    setSchools(newSchools);
  }

  function handleJobsChange(id, name, value) {
    const editedJobIndex = jobs.findIndex((e) => {
      return e.id == id;
    });

    const editedJob = jobs[editedJobIndex];

    const newJob = { ...editedJob, [name]: value };
    const newJobs = jobs.toSpliced(editedJobIndex, 1, newJob);

    setJobs(newJobs);
  }

  function handleJobsAdd() {
    const highestId = findHighestId(jobs);

    const newJob = { ...defaultJob, id: highestId + 1 };

    const newJobs = [...jobs, newJob];

    setJobs(newJobs);
  }

  function handleJobsRemove(id) {
    const jobIndex = jobs.findIndex((element) => element.id === id);
    const newJobs = jobs.toSpliced(jobIndex, 1);

    setJobs(newJobs);
  }

  function handleDutiesChange(jobId, dutyId, value) {
    const editedJobIndex = jobs.findIndex((e) => e.id == jobId);
    const editedJob = jobs[editedJobIndex];

    const editedDuties = editedJob.duties;

    const editedDutyIndex = editedDuties.findIndex((e) => e.id == dutyId);
    const editedDuty = editedDuties[editedDutyIndex];

    const newDuty = { ...editedDuty, value };
    const newDuties = editedDuties.toSpliced(editedDutyIndex, 1, newDuty);
    const newJob = { ...editedJob, duties: newDuties };
    const newJobs = jobs.toSpliced(editedJobIndex, 1, newJob);

    setJobs(newJobs);
  }

  function handleDutiesAdd(jobId) {
    const editedJobIndex = jobs.findIndex((e) => e.id == jobId);
    const editedJob = jobs[editedJobIndex];

    const editedDuties = editedJob.duties;

    const highestDutyId = findHighestId(editedDuties);

    const newDuty = { ...defaultDuty, id: highestDutyId + 1 };
    const newDuties = [...editedDuties, newDuty];
    const newJob = { ...editedJob, duties: newDuties };
    const newJobs = jobs.toSpliced(editedJobIndex, 1, newJob);

    setJobs(newJobs);
  }

  function handleDutiesRemove(jobId, dutyId) {
    const editedJobIndex = jobs.findIndex((e) => e.id == jobId);
    const editedJob = jobs[editedJobIndex];

    const editedDuties = editedJob.duties;

    const editedDutyIndex = editedDuties.findIndex((e) => e.id == dutyId);

    const newDuties = editedDuties.toSpliced(editedDutyIndex, 1);
    const newJob = { ...editedJob, duties: newDuties };
    const newJobs = jobs.toSpliced(editedJobIndex, 1, newJob);

    setJobs(newJobs);
  }

  function handlePreviewOpen() {
    setIsPreviewOpen(true);
  }

  function handlePreviewClose() {
    setIsPreviewOpen(false);
  }

  function handleEditorClean() {
    setCredentials({ ...defaultCredentials });
    setSchools([{ ...defaultSchool }]);
    setJobs([{ ...defaultJob }]);
  }

  const editorHandlers = {
    handleCredentialsChange,

    handleSchoolsChange,
    handleSchoolsAdd,
    handleSchoolsRemove,

    handleJobsChange,
    handleJobsAdd,
    handleJobsRemove,

    handleDutiesChange,
    handleDutiesAdd,
    handleDutiesRemove,

    handlePreviewOpen,

    handleEditorClean,
  };

  let rendered;
  if (isPreviewOpen) {
    rendered = (
      <Preview cvData={cvData} handlePreviewClose={handlePreviewClose} />
    );
  } else {
    rendered = <Editor cvData={cvData} handlers={editorHandlers} />;
  }

  return <div className="cv-creator">{rendered}</div>;
}

export default CvCreator;

function findHighestId(array) {
  const ids = array.map((e) => e.id);
  const highest = ids.reduce(
    (candidate, current) => (current > candidate ? current : candidate),
    0
  );

  return highest;
}
