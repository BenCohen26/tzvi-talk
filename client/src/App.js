import React from 'react';

import SignInWrapper from './Components/SignInBlockWrapperComponent/SignInWrapper';

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <p className="main-title">Welcome to Tzvi Talk!</p>
      <SignInWrapper />
    </div>
  );
}

export default App;
