import * as request from 'superagent'
export const ADD_STOCK = 'ADD_STOCK'
export const GET_STOCKS = 'GET_STOCKS'

const token = 'pk_3c142f8394684e1ea69baa77935eb86d'
const filter = ['symbol', 'companyName', 'open', 'close', 'latestPrice', 'peRatio', 'latestVolume', 'avgTotalVolume']

export function addStock(symbol) {
  return {
    type: ADD_STOCK,
    payload: {
      symbol
    } 
  }
}

export function getStocks(stocks){
  return function(dispatch){
    request(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${stocks}&types=quote&filter=${filter}&&token=${token}`)
    .then(response => {
      console.log('RESPONSE!!', response)

      //Lets manipulate a bit the data to make it fit with the idea of our app.

      var result = Object.keys(response.body).map( key => {
        console.log('key', key)
        let arr = {[key]: response.body[key].quote}
        return arr
      });

      console.log('RESULT', result)

      dispatch({
        type: GET_STOCKS,
        payload: result
      })
    })
  }
}
