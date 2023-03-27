import styles from './CartItem.module.css'

const CartItem = ({ title, totalPrice, count }) => {
  return (
    <div className={styles['cart__item']}>
      <p className={styles['cart__item-name']}>{title}</p>
      <p className={styles['cart__item-count']}>{count}</p>
      <p className={styles['cart__item-price']}>${totalPrice}</p>
    </div>
  )
}

export default CartItem
