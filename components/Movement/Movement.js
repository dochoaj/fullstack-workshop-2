import React, { Component } from 'react'
import './Movement.css'

class Movement extends Component { 
  render() {
    return (
      <div className={this.movementClass()}>
        {this.renderDescription()}
        {this.renderAmount()}
      </div>
    )
  }

  movementClass() {
    return `movement ${this.movementClass()}`;
  }

  renderDescription() {
    return (
      <div className='movement-description'>
        {this.props.description}
      </div>
    );
  }

  renderAmount() {
    return (
      <div className='movement-amount'>
        {this.props.amount}
      </div>
    );
  }

  isIncome() {
    return this.props.amount >= 0;
  }

  movementClass() {
    if (this.isIncome()) {
      return 'possitive';
    }

    return 'negative';
  }
}

export default Movement;