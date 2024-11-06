import { useState } from 'react';

import {
  defaultCredentials,
  defaultSchool,
  defaultJob,
  defaultDuty,
} from '../data/defaultCvValues';

import Editor from './editor/Editor';
import Preview from './preview/Preview';

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

  function handleAddSchool() {
    const highestId = findHighestId(schools);

    const newSchool = { ...defaultSchool, id: highestId + 1 };

    const newSchools = [...schools, newSchool];

    setSchools(newSchools);
  }

  function handleRemoveSchool(id) {
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

  function handleAddJob() {
    const highestId = findHighestId(jobs);

    const newJob = { ...defaultJob, id: highestId + 1 };

    const newJobs = [...jobs, newJob];

    setJobs(newJobs);
  }

  function handleRemoveJob(id) {
    const jobIndex = jobs.findIndex((element) => element.id === id);
    const newJobs = jobs.toSpliced(jobIndex, 1);

    setJobs(newJobs);
  }

  function handleOpenPreview() {
    setIsPreviewOpen(true);
  }

  function handleClosePreview() {
    setIsPreviewOpen(false);
  }

  function handleDutiesChange(jobId, dutyId, value) {
    const editedJobIndex = jobs.findIndex((e) => e.id == jobId);
    const editedJob = jobs[editedJobIndex];

    const editedDuties = editedJob.duties;

    const editedDutyIndex = editedDuties.findIndex((e) => e.id == dutyId);
    const editedDuty = editedDuty[editedDutyIndex];

    const newDuty = { ...editedDuty, text: value };
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

  const editorHandlers = {
    handleCredentialsChange,
    handleSchoolsChange,
    handleAddSchool,
    handleRemoveSchool,
    handleJobsChange,
    handleAddJob,
    handleRemoveJob,
    handleOpenPreview,
    handleDutiesChange,
    handleDutiesAdd,
    handleDutiesRemove,
  };

  if (isPreviewOpen) {
    return <Preview cvData={cvData} handleClosePreview={handleClosePreview} />;
  } else {
    return <Editor cvData={cvData} handlers={editorHandlers} />;
  }
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
