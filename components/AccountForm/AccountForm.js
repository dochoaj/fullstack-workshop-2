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
    this.props.onCreate(
      this.state.accountName,
      { onSuccess: this.onAccountCreateSuccess, onError: this.onAccountCreateError }
    );
  }

  onAccountCreateSuccess = () => {
    this.setState({ accountName: '' });
  }

  onAccountCreateError = () => {
    console.log('I dont want to live on this planet anymore.');
  }
}