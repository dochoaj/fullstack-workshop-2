import React, { Component } from 'react'
import Movement from '../Movement/Movement'

import './MovementList.css'

class MovementList extends Component {
  render() {
    return (
      <div className='movement-list'>
        <Movement description='Pago programadores chile' amount={1000} />
        <Movement description='Navidad :(' amount={-100} />
        <Movement description='WTF' amount={0} />
      </div>
    );
  }
}

export default MovementList;