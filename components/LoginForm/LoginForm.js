import React, { Component } from 'react'

export default class LoginForm extends Component {
  render() {
    return (
      <div className='login-form'>
        <input type='text' placeholder='Username' />
        <input type='password' placeholder='Password' />
      </div>
    );
  }
}