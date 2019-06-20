export const ADD_STOCK = 'ADD_STOCK'

export function addStock(symbol) {
  return {
    type: ADD_STOCK,
    payload: {
      symbol
    }
    
  }
}