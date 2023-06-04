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

export default function Login({ logIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    logIn(email, password);
  };

  return (
    <React.Fragment>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label className={css(styles.label)} htmlFor="email">
              Email:
            </label>
            <input
              className={css(styles.input)}
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
            />
            <button className={css(styles.button)} type="submit">OK</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}
