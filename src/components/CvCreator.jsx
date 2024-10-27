import { useState } from 'react';

import Editor from './editor/Editor';
import Preview from './preview/Preview';

function CvCreator() {
  const [credentials, setCredentials] = useState({});
  const [schools, setSchools] = useState([]);
  const [jobs, setJobs] = useState([]);

  const cvData = { credentials, schools, jobs };

  function handleCredentialsChange(name, event) {
    const value = event.target.value;

    const newCredentials = { ...credentials, [name]: value };

    setCredentials(newCredentials);
  }

  const handlers = { handleCredentialsChange };

  return (
    <div>
      <Editor cvData={cvData} handlers={handlers} />
      <Preview cvData={cvData} />
    </div>
  );
}

export default CvCreator;
