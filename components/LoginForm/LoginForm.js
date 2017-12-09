import React, { Component } from 'react'

export default class LoginForm extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <div className='login-form'>
        <input
          type='text'
          placeholder='Username'
          value={this.state.username}
          onChange={this.onChangeUsername}
        />
        <input 
          type='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.onChangePassword}
        />
        <button onClick={this.onClickLogin}>
          Log In
        </button>
      </div>
    );
  }

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  }

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  }

  onClickLogin = (event) => {
    event.preventDefault();
    this.props.login(
      this.state.username, this.state.password,
      { 
        onSuccess: () => console.log('Ok'),
        onError: () => console.log('Fail')
      }
    );
  }
}