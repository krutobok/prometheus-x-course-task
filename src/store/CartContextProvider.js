import { useEffect, useState } from 'react'
import cartContext from './cart-context'

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const cartChangeHandler = (item) => {
    setCartItems((prevState) => {
      const index = prevState.findIndex((book) => book.id === item.id)
      const updatedItems = [...prevState]
      if (index !== -1) {
        const newObj = {
          ...updatedItems[index],
          count: updatedItems[index].count + item.count,
          totalPrice: (updatedItems[index].count + item.count) * item.price,
        }
        updatedItems[index] = newObj
      } else {
        const newObj = {
          id: item.id,
          count: item.count,
          title: item.title,
          totalPrice: item.price * item.count,
        }
        updatedItems.push(newObj)
      }
      return updatedItems
    })
  }
  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acum, el) => {
      acum += el.totalPrice
      return acum
    }, 0)
    setTotalPrice(newTotalPrice)
  }, [cartItems, setTotalPrice])
  const clearCartHandler = () => {
    setCartItems([])
    setTotalPrice(0)
  }
  const defaultValue = {
    items: cartItems,
    totalPrice,
    addItems: cartChangeHandler,
    clearCart: clearCartHandler,
  }
  return (
    <cartContext.Provider value={defaultValue}>{children}</cartContext.Provider>
  )
}

export default CartContextProvider
