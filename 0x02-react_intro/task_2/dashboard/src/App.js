import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFooterCopy, getFullYear } from './utils';
import { Notifications } from './Notifications';

function App() {
  return (
    <div className="App">
            <div className='root-notifications'>
        {Notifications()}
      </div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>

      </header>
        <div className='App-body'>
          <p>Login to access the full dashboard</p>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button>OK</button>

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
