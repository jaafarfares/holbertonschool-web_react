import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <React.Fragment>
       <p>Login to access the full dashboard</p>
        <div className='Emailandpassword'>
          <label className="label_email" for="email">
            Email:
          </label>
          <input type="email" id="email" name="email"></input>
          <label className="label_password" for="password" >
            Password:
          </label>
          <input type="password" id="pass" name="password" minlength="8" required></input>
          <button className='label-button'>
            OK
          </button>
          </div>
    </React.Fragment>
  );
}
