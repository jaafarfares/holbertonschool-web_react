import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import HolbertonLogo from '../assets/HolbertonLogo.jpg';
import { AppContext } from '../App/AppContext';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: '10px',
    boxShadow: '0px 2px 5px 0px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  logoutSection: {
    marginLeft: 'auto',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
});

export default class Header extends React.Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <div className={css(styles.header)}>
        <img className={css(styles.logo)} src={HolbertonLogo} alt="logo" />
        <h1 className={css(styles.title)}>Dashboard</h1>

        {user.isLoggedIn && (
          <div className={css(styles.logoutSection)} id="logoutSection">
            Welcome {user.email} (<span onClick={logOut}>logout</span>)
          </div>
        )}
      </div>
    );
  }
}
