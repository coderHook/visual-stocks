import { GET_STOCKS } from '../actions/stocksActions'

export default (state = {}, action = {}) => {
  switch(action.type){
 
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload
      }
   
    default:
      return state
  }
}