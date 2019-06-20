import * as request from 'superagent'
export const ADD_STOCK = 'ADD_STOCK'
export const GET_STOCKS = 'GET_STOCKS'

export function addStock(symbol) {
  return {
    type: ADD_STOCK,
    payload: {
      symbol
    }
    
  }
}

export function getStocks(market){
  return function(dispatch){
    request('https://api.iextrading.com/1.0/tops?symbols=' + market)
    .then(response => {
      console.log('RESPONSE!!', response)
      dispatch({
        type: GET_STOCKS,
        payload: response.body
      })
    })
  }
}
