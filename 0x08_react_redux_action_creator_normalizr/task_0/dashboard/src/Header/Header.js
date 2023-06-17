import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import HolbertonLogo from '../assets/HolbertonLogo.jpg';

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

export default function Header() {
  return (
    <div className={css(styles.header)}>
      <img className={css(styles.logo)} src={HolbertonLogo} alt='logo' />
      <h1 className={css(styles.title)}>Dashboard</h1>
    </div>
  );
}
