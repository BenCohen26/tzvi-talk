import React from 'react';
import './SignInWrapper.css';

import SignInBlock from './SignInBlockComponent/SignInBlock';

const SignInWrapper = () => {
  return (
    <div className="sign-in-wrapper">
      <p className="sub-title">Sign in to continue.</p>
      <SignInBlock />
      <p className="register">Create a new account</p>
    </div>
  );
};

export default SignInWrapper;
