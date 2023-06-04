import React from 'react';
import './App.css';
import Login from '../Login';
import Footer from '../';
import Header from './Header';
import Notifications from '../Notifications/Notifications.js';

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
