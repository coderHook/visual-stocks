import { GET_STOCKS, ADD_FILTER } from '../actions/stocksActions'

export default (state = {}, action = {}) => {
  switch(action.type){
    case ADD_FILTER:
      return {
        ...state,
        filter: action.payload
      }
 
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload
      }
   
    default:
      return state
  }
}