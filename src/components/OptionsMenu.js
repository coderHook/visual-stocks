import React, { Component } from 'react'
import './OptionsMenu.css'
import { addFilter } from '../actions/stocksActions'
import { connect } from 'react-redux';


class OptionsMenu extends Component {
  filterByColor = () => {
    const color = this.props.stocks.filter === 'green' ? 'red' : 'green' 

    this.props.addFilter(color)
  }
  render() {
    return (
      <div className="options-menu">
        <div className="filter">
          <span className="trend">Bearish</span>
          <label className="switch">
            <input type="checkbox" onClick={() => this.filterByColor()}/>
            <span className="slider round"></span>
          </label>
          <span className="trend">Bullish</span>
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

export default connect(mapStateToProps, { addFilter })(OptionsMenu)
