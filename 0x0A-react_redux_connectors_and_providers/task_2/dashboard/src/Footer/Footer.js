import React from 'react';
import { connect } from 'react-redux';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

const mapStateToProps = (state) => {
  return {
    user: {
      isLoggedIn: state.get('isUserLoggedIn'),
    },
  };
};

function Footer({ user }) {
  return (
    <div className='App-footer'>
      <p>
        {getFullYear()} - {getFooterCopy()}
      </p>
      <p>{user.isLoggedIn ? 'Logged In' : 'Logged Out'}</p> {/* Display the user login status */}
    </div>
  );
}

export default connect(mapStateToProps)(Footer);

/*
export default function Footer() {
  return (
    <div className='App-footer'>
    <p>
      {getFullYear()} - {getFooterCopy()}
    </p>
  </div>
  );
}
 */
