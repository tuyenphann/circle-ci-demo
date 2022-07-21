import logo from './logo.svg';
import './App.css';

import firebaseConfig from './variables/firebase-config';
import globalConfig from './variables/global-config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React more!!!!!!!?
        </a>
        <br />
        <div>projectId: {firebaseConfig.projectId}</div>
        <div>apiBaseUrl: {globalConfig.apiBaseUrl}</div>
      </header>
    </div>
  );
}

export default App;
