import React from 'react';
import './RegisterBlock.css';

class RegisterBlock extends React.Component {
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
      <div className="register-block">
        <form onSubmit={handleSubmit} className="register-form">
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
          <input type="submit" value="Register" />
        </form>
      </div>
    );
  }
}
