import React, { useContext } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

export default function Footer() {
  const { user } = useContext(AppContext);

  return (
    <div className='App-footer'>
      <p>
        {getFullYear()} - {getFooterCopy()}
      </p>
      {user.isLoggedIn && (
        <p>
          <a href='contact.html'>Contact us</a>
        </p>
      )}
    </div>
  );
}
