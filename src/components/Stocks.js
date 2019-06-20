import React, { Component } from 'react'
import * as request from 'superagent'
import Card from './Card'
import { connect } from 'react-redux';
import { addStock } from '../actions/stocksActions'

class Stocks extends Component {

  state = {
    downJones: ['MMM', 'AXP', 'AAPL', 'BA', 'KO', 'CAT', 'CVX', 'CSCO', 'DIS', 'DWDP', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT']
  }


  componentDidMount(){
    request('https://api.iextrading.com/1.0/tops?symbols=' + this.state.downJones)
      .then(response => {
        console.log(response)
        this.setState({stocks: response.body})
      })

      this.props.addStock('KO')
      this.props.addStock('AAPL')
  }
  
  render() {
    if(!this.state.stocks) return 'Loading...'
    
    console.log(this.props.stocks)
    return (
      <div>
        <h1>List of Stocks Downjones</h1>
        <div className="cards-list">
          { this.state.stocks.map(stock => 
              <Card key= {stock.symbol} stock={stock} />)
          }
      </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    stocks: state.stocksReducer
  }
}

export default connect(mapStateToProps, { addStock })(Stocks)