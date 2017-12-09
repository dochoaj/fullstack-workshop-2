import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import MovementList from './components/MovementList/MovementList'
import AccountList from './components/AccountList/AccountList'
import AccountForm from './components/AccountForm/AccountForm'
import Loading from './components/Loading/Loading'
import LoginForm from './components/LoginForm/LoginForm'
import FinancialAxios from './utils/FinancialAxios'


class App extends Component {
  state = {
    loading: true,
    accounts: [],
    user: {}
  }

  componentWillMount() {    
    FinancialAxios.get('accounts')
      .then(response => {
        this.setState({ accounts: response.data, loading: false });
      })
  }
 
  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    if (!this.currentUser()) {
      return <LoginForm login={this.login} />
    }

    return (
      <div className='account-container'>
        <AccountForm onCreate={this.buildAccount} />
        <AccountList data={this.state.accounts} />
      </div>
    );
  }

  buildAccount = (name, config) => {
    // { name: name }
    FinancialAxios.post('accounts', { name, user_id: 1 })
      .then(response => {
        // Spread operator, destruir una estructura de datos en su mínima expresión.
        this.setState({
          accounts: [...this.state.accounts, response.data]
        });
        config.onSuccess();
      })
      .catch(error => {
        config.onError();
      })
  }

  login = (email, password, config) => {
    FinancialAxios.post('session/login', { email, password })
    .then(response => {
      this.setState({
        user: response.data
      });
      config.onSuccess();
    })
    .catch(error => {
      config.onError();
    })
  }

  currentUser() {
    if (this.state.user.token) {
      return this.state.user;
    }

    return false;
  }
}

ReactDOM.render(<App />, document.getElementById('app'));