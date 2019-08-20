import React from 'react';
import SignInBlock from './Components/SignInBlockComponent/SignInBlock';

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <p className="main-title">Welcome to Tzvi Talk!</p>
      <p className="sub-title">Sign in to continue.</p>
      <SignInBlock />
      <p className="register">Create a new account</p>
    </div>
  );
}

export default App;
