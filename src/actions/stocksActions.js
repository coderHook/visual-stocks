import * as request from 'superagent'
export const GET_STOCKS = 'GET_STOCKS'
export const ADD_FILTER = 'ADD_FILTER'

// const production = {
//   prefix: 'cloud',
//   token: 'pk_3c142f8394684e1ea69baa77935eb86d'
// }

const test = {
  prefix: 'sandbox',
  token: 'Tpk_46e1649916ac4e0fb68d15e7014f3b95'
}

const filter = ['symbol', 'companyName', 'open', 'close', 'latestPrice', 'peRatio', 'latestVolume', 'avgTotalVolume']

export function addFilter(filter) {
  return {
    type: ADD_FILTER,
    payload: filter
  }
}

export function getStocks(stocks){
  return function(dispatch){
    request(`https://${test.prefix}.iexapis.com/stable/stock/market/batch?symbols=${stocks}&types=quote&filter=${filter}&&token=${test.token}`)
    .then(response => {
      console.log('RESPONSE!!', response)

      //Lets manipulate a bit the data to make it fit with the idea of our app.
      var result = Object.keys(response.body).map( key => {
        let arr = {[key]: response.body[key].quote}
        return arr
      });

      dispatch({
        type: GET_STOCKS,
        payload: result
      })
    })
  }
}
