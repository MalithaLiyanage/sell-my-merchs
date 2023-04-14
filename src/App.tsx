import React, {useContext} from 'react';
import logo from './logo.svg';
import './App.scss';
import { MainContext } from './contexts/MainContext';
import { User } from './interfaces/Models';

function App() {

  const main = useContext(MainContext);

  console.log('user', main?.user)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
