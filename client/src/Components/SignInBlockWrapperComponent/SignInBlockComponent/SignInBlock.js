import React from 'react';
import './SignInBlock.css';

class SignInBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="sign-in-block">
        <form onSubmit={this.handleSubmit} className="sign-in-form">
          <label>
            Username
            <input
              type="text"
              onChange={event =>
                this.setState({ username: event.target.value })
              }
            />
          </label>
          <label>
            Password
            <input
              type="password"
              onChange={event =>
                this.setState({ password: event.target.value })
              }
            />
          </label>
          <input type="submit" value="Sign In" />
        </form>
      </div>
    );
  }
}

export default SignInBlock;
