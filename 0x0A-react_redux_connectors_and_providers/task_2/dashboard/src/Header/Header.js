import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import HolbertonLogo from '../assets/holberton_logo.jpg';
import { logout } from '../redux/actions'; 

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
});

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

function Header({ user, logout }) {
  const handleLogout = () => {
    logout(); 
  };

  return (
    <div className={css(styles.header)}>
      <img className={css(styles.logo)} src={HolbertonLogo} alt='logo' />
      <h1 className={css(styles.title)}>Dashboard</h1>
      {user.isLoggedIn && <a href="#" onClick={handleLogout}>Logout</a>}
    </div>
  );
}

export default connect(mapStateToProps, { logout })(Header);
