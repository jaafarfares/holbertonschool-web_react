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
import {
	displayNotificationDrawer,
	hideNotificationDrawer,
  } from "../actions/uiActionCreators";


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
    const newListNotifications = this.state.listNotifications.filter((item) => item.id !== id);
    this.setState({ listNotifications: newListNotifications });
  }

  render() {
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer, listNotifications } = this.props;


    let listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
    

    return (
      <Fragment>
        <div className={css(styles.body)}>
          <div className={css(styles.headerRow)}>
            <Notifications listNotifications={listNotifications} displayDrawer={displayDrawer}
			handleDisplayDrawer={displayNotificationDrawer}
			handleHideDrawer={hideNotificationDrawer}
			markNotificationAsRead={this.markNotificationAsRead} />
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
App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
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
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  listNotifications: [],
};


export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get('isUserLoggedIn'),
    displayDrawer: state.get('isNotificationDrawerVisible'),

  };
};
const mapDispatchToProps = {
	displayNotificationDrawer,
	hideNotificationDrawer,
  };

export default connect(mapStateToProps, mapDispatchToProps)(App);
