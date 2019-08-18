import React from 'react';
import './SignInBlock.css';

class SignInBlock extends React.Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="sign-in-block">
        <label>
          Username
          <input type="text" onChange={(event) => this.setState({ username: event.target.value })}/>
        </label>
        <label>
          Password
          <input type="text" onChange={(event) => this.setState({ password: event.target.value })}/>
        </label>
        <input type="submit" value="Sign In" />
      </form>
    );
  }
}

export default SignInBlock;
