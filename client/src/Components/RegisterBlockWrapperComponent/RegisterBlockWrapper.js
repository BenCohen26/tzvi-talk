import React from 'react';
import './RegisterBlockWrapper.css';

import RegisterBlock from './RegisterBlockComponent/RegisterBlock';

const RegisterBlockWrapper = () => {
  return (
    <div className="register-block-wrapper">
      <p className="sub-title">Enter details to register.</p>
      <RegisterBlock />
      <p className="sign-in">Already got an account? Sign in</p>
    </div>
  );
};

export default RegisterBlockWrapper;
