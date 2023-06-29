import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { connect } from 'react-redux';
import AppContext from './AppContext.js';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
} from '../actions/uiActionCreators';

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


class App extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter((notification) => {
        return notification.id !== id;
      }),
    });
  }

  render() {
    const {
      logOut,
      user,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      listNotifications,
    } = this.props;

    let listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <AppContext.Provider value={{ user, logOut }}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.body)}>
          <div className={css(styles.headerRow)}>
            <Header />
          </div>

          {!user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}

          <Footer className={css(styles.footer)} />
        </div>

        <BodySection title="News from the School">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum."
          </p>
        </BodySection>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool.isRequired,
  }).isRequired,
  displayDrawer: PropTypes.bool.isRequired,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      html: PropTypes.object,
    })
  ).isRequired,
  loginRequest: PropTypes.func.isRequired,
  logoutSuccess: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: {
      isLoggedIn: state.get('isUserLoggedIn'),
    },
    displayDrawer: state.get('isNotificationDrawerVisible'),
    listNotifications: state.get('notifications')?.toJS() || [],
  };
};

const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginRequest,
  logoutSuccess,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
