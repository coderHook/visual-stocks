import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    const stock = this.props.stock
    return (
    
          <div className="card 1 ">
            <div className="card_title title-white">
              <p>{stock.symbol}</p>
            </div>
            <div className="card_price title-white">
              <p>{stock.lastSalePrice}</p>
            </div>
          </div>

    )
  }
}
