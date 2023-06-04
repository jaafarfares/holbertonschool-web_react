import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Notifications />
        <div className='App'>
          <Header />
        </div>
        <div className='App-body'>
          <Login />
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
