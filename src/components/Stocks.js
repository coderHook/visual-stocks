import React, { Component } from 'react'
import Card from './Card'
import { connect } from 'react-redux';
import { getStocks } from '../actions/stocksActions'
import OptionsMenu from './OptionsMenu';

const downJones = ['MMM', 'AXP', 'AAPL', 'BA', 'KO', 'CAT', 'CVX', 'CSCO', 'DIS', 'XOM', 'GE', 'GS', 'HD', 'IBM', 'INTC', 'JNJ', 'JPM', 'MCD', 'MRK', 'MSFT', 'NKE', 'PFE', 'PG', 'TRV', 'UTX', 'UNH', 'VZ', 'V', 'WMT']

// const myStocks = ['AAPL', 'FB', 'KO']

class Stocks extends Component {

  componentDidMount(){
    this.props.getStocks(downJones)
  }
  
  render() {
    if(!this.props.stocksReducer.stocks) return 'Loading...'
    
    return (
      <div>
        <h1>List of Stocks Downjones</h1>

        <OptionsMenu />

        <div className="cards-list">
          { this.props.stocksReducer.stocks.map(stock => 
              <Card key= {Object.keys(stock)} stock={Object.values(stock)} />)
          }
      </div>
      </div>
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    stocksReducer: state.stocksReducer
  }
}

export default connect(mapStateToProps, { getStocks })(Stocks)