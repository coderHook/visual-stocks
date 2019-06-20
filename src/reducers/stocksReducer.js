import { ADD_STOCK, GET_STOCKS } from '../actions/stocksActions'

export default (state = {}, action = {}) => {
  switch(action.type){
    case ADD_STOCK:
      return [
        ...state,
        action.payload
      ]
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload
      }
   
    default:
      return state
  }
}