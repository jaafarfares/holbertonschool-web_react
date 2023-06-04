import React, { Component, Fragment } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';

class App extends Component {
  render() {
    const listNotifications = [
      {
        id: 1,
        type: "default",
        value: "New course available",
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: 3,
        type: "urgent",
        html: { __html: getLatestNotification() },
      }
    ];

    const listCourses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    const isLoggedIn = this.props.isLoggedIn;

    return (
      <Fragment>
        <Notifications listNotifications={listNotifications} />
        <div className='App'>
          <Header />
        </div>
        <div className='App-body'>
          {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login />}
        </div>
        <div className='App-footer'>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
