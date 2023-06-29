import React, { Component, Fragment } from 'react';
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
import { user, logOut } from './AppContext.js';

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
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };
  }

  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleClick(event) {
    if (event.keyCode === 72 && event.ctrlKey) {
      alert('Logging you out');
      this.state.logOut();
    }
  }

  logIn(email, password) {
    this.setState({ user: { email: email, password: password, isLoggedIn: true } });
  }

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
    const newListNotifications = this.state.listNotifications.filter((item) => item.id !== id);
    this.setState({ listNotifications: newListNotifications });
  }

  render() {
    
    let { isLoggedIn } = this.props;

    const { displayDrawer, user, logOut, listNotifications } = this.state;
    const value = { user, logOut };

    let listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    

    return (
      <Fragment>
        <div className={css(styles.body)}>
          <div className={css(styles.headerRow)}>
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>

          {isLoggedIn === false && (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          {isLoggedIn === true && (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          )}

          <Footer className={css(styles.footer)} />
        </div>

        <BodySection title="News from the School">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
            repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga
            praesentium optio, eaque rerum! Provident similique accusantium nemo autem.
          </p>
        </BodySection>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
  };
};

export default connect(mapStateToProps)(App);
