import React from 'react';
import './SignInBlock.css';

class SignInBlock extends React.Component {
  handleSubmit(event) {
    alert("Submitted");
  }
  
  render() {
    return (
      <form action="" className="sign-in-block">
        <label>
          Username
          <input type="text"/>
        </label>
        <label>
          Password
          <input type="text" />
        </label>
        <input type="submit" value="Sign In" />
      </form>
    );
  }
}

export default SignInBlock;
