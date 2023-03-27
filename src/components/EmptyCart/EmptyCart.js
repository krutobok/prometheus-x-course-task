import cartIcon from '../../assets/images/cart.svg'
import styles from './EmptyCart.module.css'

const EmptyCart = () => {
  return (
    <div className={styles['cart-empty']}>
      <img className={styles['cart-empty__img']} src={cartIcon} alt="cart" />
      <p>Cart empty...</p>
    </div>
  )
}

export default EmptyCart
