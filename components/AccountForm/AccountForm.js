import React, { Component } from 'react'

export default class AccountForm extends Component {
  state = {
    accountName: ''
  }

  render() {
    return (
      <div className='account-form'>
        <input
          type='text'
          placeholder='Create new account'
          onChange={this.onAccountNameChange}
          value={this.state.accountName}
        />
        <button onClick={this.onAccountButtonClick}>Create</button>
      </div>
    );
  }

  onAccountNameChange = (event) => {
    this.setState({ accountName: event.target.value });
  }

  onAccountButtonClick = (event) => {
    console.log(`Creating account with name ${this.state.accountName}`);
  }
}