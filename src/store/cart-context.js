import React from 'react'

const cartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItems: () => {},
  clearCart: () => {},
})
export default cartContext
