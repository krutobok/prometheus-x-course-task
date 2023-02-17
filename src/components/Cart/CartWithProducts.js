import { useContext } from 'react'
import cartContext from '../../store/cart-context'
import CartItem from './CartItem'
import styles from './CartWithProducts.module.css'

const CartWithProducts = () => {
  const context = useContext(cartContext)
  return (
    <div className={styles['cart-with-products']}>
      <div className={styles['cart__items']}>
        {context.items.map((item) => (
          <CartItem
            title={item.title}
            key={item.id}
            id={item.id}
            totalPrice={item.totalPrice}
            count={item.count}
          />
        ))}
      </div>
      <p className={styles['cart__total-price']}>
        Total price, ${context.totalPrice.toFixed(2)}
      </p>
    </div>
  )
}

export default CartWithProducts
