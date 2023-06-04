import React from 'react';
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
  return (
    <React.Fragment>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <div>
          <label className={css(styles.label)} htmlFor="email">
            Email:
          </label>
          <input className={css(styles.input)} type="email" id="email" name="email" />
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
          />
          <button className={css(styles.button)}>OK</button>
        </div>
      </div>
    </React.Fragment>
  );
}
