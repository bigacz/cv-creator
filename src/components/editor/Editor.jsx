import General from './General';
import Education from './Education';
import Experience from './Experience';

function Editor({ credentials, schools, employments, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <General credentials={credentials} />
      <Education schools={schools} />
      <Experience employments={employments} />
      <button>Save</button>
    </form>
  );
}

export default Editor;
