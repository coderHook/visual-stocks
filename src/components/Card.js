import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {
  render() {
    const stock = this.props.stock[0]
    console.log('STOCK', stock)
    const style = (stock.open > stock.close) 
                  ? 'rgba(214, 69, 65, 0.5)'
                  : 'rgba(0,255,0,0.5)'

    const gradient = `linear-gradient(0deg,${style},${style}), url(https://i.redd.it/b3esnz5ra34y.jpg)`
    return (
          <div className="card 1 " style={{background: gradient}}>
            <div className="card_title title-white">
              <p>{stock.symbol}</p>
              <small>
                {stock.open > stock.close 
                ? 'red'
                : 'green'}
              </small>
            </div>
            <div className="card_price title-white">
              <p>{stock.latestPrice}</p>
            </div>
          </div>
    )
  }
}
