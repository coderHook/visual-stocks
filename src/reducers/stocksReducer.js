import {ADD_STOCK} from '../actions/stocksActions'

export default (state = [], action = {}) => {
  switch(action.type){
    case ADD_STOCK:
      return [
        ...state,
        action.payload
      ]

    default:
      return state
  }
}