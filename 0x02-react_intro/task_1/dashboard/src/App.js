import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>

      </header>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
        </div>
      <footer>
        <div className='App-footer'>
        <p>{getFooterCopy(true)} &copy; {getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
