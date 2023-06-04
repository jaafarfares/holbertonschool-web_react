import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    margin: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
  },
  input: {
    marginBottom: '10px',
    padding: '5px',
    width: '100%',
  },
  button: {
    padding: '5px 10px',
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
});

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enableSubmit, setEnableSubmit] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
    setEnableSubmit(event.target.value !== '' && password !== '');
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
    setEnableSubmit(event.target.value !== '' && email !== '');
  };

  return (
    <React.Fragment>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <label className={css(styles.label)} htmlFor="email">
            Email:
          </label>
          <input
            className={css(styles.input)}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChangeEmail}
          />
          <label className={css(styles.label)} htmlFor="password">
            Password:
          </label>
          <input
            className={css(styles.input)}
            type="password"
            id="password"
            name="password"
            minLength={8}
            required
            value={password}
            onChange={handleChangePassword}
          />
          <input
            className={css(styles.button)}
            type="submit"
            value="OK"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    </React.Fragment>
  );
}
