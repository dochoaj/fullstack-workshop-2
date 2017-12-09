import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import MovementList from './components/MovementList/MovementList'
import AccountList from './components/AccountList/AccountList'
import AccountForm from './components/AccountForm/AccountForm'
import FinancialAxios from './utils/FinancialAxios'
import Loading from './components/Loading/Loading'

class App extends Component {
  state = {
    loading: true
  }

  componentWillMount() {
    // https://fintac-backend.herokuapp.com/api/v1/status
    // DanielAxios.get('eggs')
    //   .then(response => {
    //     Mom.doCake();
    //   })
    FinancialAxios.get('status')
      .then(response => {
        console.log(response.data);
        this.setState({ loading: false });
      })
      // .then(function(response) {
      //   console.log(response);
      // })
  }
 
  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    return (
      <div className='account-container'>
        <AccountForm />
        <AccountList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));