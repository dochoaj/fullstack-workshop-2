import React, { Component } from 'react'
import Account from '../Account/Account'
import Loading from '../Loading/Loading'
import FinancialAxios from '../../utils/FinancialAxios'

class AccountList extends Component {
  state = {
    loading: true,
    accounts: []
  }

  componentWillMount() {
    FinancialAxios.get('accounts')
      .then(response => {
        this.setState({
          loading: false,
          accounts: response.data
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <Loading />
    }
    
    return (
      <div className='account-list'>
        {this.renderAccounts()}
      </div>
    )
  }

  renderAccounts() {
    return this.state.accounts.map(account => {
      const { id, name } = account;
      return <Account key={id} name={name} />
    })
  }
}

export default AccountList;