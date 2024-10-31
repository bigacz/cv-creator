import { useState } from 'react';

import Editor from './editor/Editor';
import Preview from './preview/Preview';

function CvCreator() {
  const [credentials, setCredentials] = useState({ ...defaultCredentials });
  const [schools, setSchools] = useState([{ ...defaultSchool }]);
  const [jobs, setJobs] = useState([]);

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

  const handlers = {
    handleCredentialsChange,
    handleSchoolsChange,
    handleAddSchool,
    handleRemoveSchool,
  };

  return (
    <div>
      <Editor cvData={cvData} handlers={handlers} />
      <Preview cvData={cvData} />
    </div>
  );
}

export default CvCreator;

const defaultCredentials = {
  first: '',
  last: '',
  email: '',
  phone: '',
};

const defaultSchool = {
  id: 0,
  schoolName: '',
  studyTitle: '',
  yearStarted: '',
  yearEnded: '',
  isEnded: '',
};

function findHighestId(array) {
  const ids = array.map((e) => e.id);
  const highest = ids.reduce(
    (candidate, current) => (current > candidate ? current : candidate),
    0
  );

  return highest;
}
