import React, { Component } from 'react'
import Account from '../Account/Account'

class AccountList extends Component {
  render() {
    return (
      <div className='account-list'>
        {this.renderAccounts()}
      </div>
    )
  }

  renderAccounts() {
    return this.props.data.map(account => {
      const { id, name } = account;
      return <Account key={id} name={name} />
    })
  }
}

export default AccountList;