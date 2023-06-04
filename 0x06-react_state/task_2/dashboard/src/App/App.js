import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { AppContext } from './AppContext';

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f5f5f5ab',
    fontFamily: 'Arial, sans-serif',
  },
  headerRow: {
    backgroundColor: '#deb5b545',
  },
  footer: {
    textAlign: 'center',
    fontStyle: 'italic',
    fontSize: '12px',
    borderTop: '1px solid #ddd',
    padding: '10px 0',
    marginTop: '20px',
  },
});

export default class App extends Component {
  state = {
    user: {
      email: '',
      password: '',
      isLoggedIn: false,
    },
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };

  render() {
    const { user } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Fragment>
          <div className={css(styles.body)}>
            <div className={css(styles.headerRow)}>
              <Notifications listNotifications={listNotifications} />
              <Header />
            </div>

            {!user.isLoggedIn && (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            {user.isLoggedIn && (
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            )}

            <Footer className={css(styles.footer)} />
          </div>

          <BodySection title="News from the School">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint
              commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat
              iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
            </p>
          </BodySection>
        </Fragment>
      </AppContext.Provider>
    );
  }
}
