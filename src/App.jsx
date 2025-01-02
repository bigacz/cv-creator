import 'styles/components/App.css';
import CvCreator from 'components/CvCreator';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header_text">CV Creator</h1>
      </header>
      <CvCreator />
      <footer className="footer">
        <a
          className="footer__link-github"
          href="https://github.com/bigacz/cv-creator"
        >
          <img
            src="src/assets/github.svg"
            alt="View the source code on github"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
