import React, { Component } from 'react'

class Account extends Component {
  render() {
    return (
      <div className='account'>
        <span className='account-name'>{this.props.name}</span>
      </div>
    )
  }
}

export default Account;