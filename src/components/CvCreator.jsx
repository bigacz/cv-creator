import { useState } from 'react';

import Editor from './editor/Editor';
import Preview from './preview/Preview';

function CvCreator() {
  const credentials = useState({});
  const schools = useState([]);
  const employments = useState([]);

  return (
    <div>
      <Editor
        credentials={credentials}
        schools={schools}
        employments={employments}
      />
      <Preview />
    </div>
  );
}

export default CvCreator;
