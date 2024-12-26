import 'styles/components/App.css';
import CvCreator from 'components/CvCreator';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header_text">Cv Creator</h1>
      </header>
      <CvCreator />
    </div>
  );
}

export default App;
