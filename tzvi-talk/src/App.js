import React from 'react';
import SignInBlock from './Components/SignInBlockComponent/SignInBlock';

import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" className="logo" />
      <p className="main-title">Welcome To Tzvi Talk!</p>
      <p className="sub-title">Sign In To Continue.</p>
      <SignInBlock />
    </div>
  );
}

export default App;
