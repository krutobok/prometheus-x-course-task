import { useContext } from 'react'
import cartContext from '../../store/context/cartContext'
import Container from '../Container/Container'
import EmptyCart from '../EmptyCart/EmptyCart'
import styles from './CartComponent.module.css'
import CartWithProducts from '../CartWithProducts/CartWithProducts'
import MyButton from '../MyButton/MyButton'

const CartComponent = () => {
  const context = useContext(cartContext)
  return (
    <section className={styles['cart']}>
      <Container className={styles['cart-container']}>
        <div className={styles['cart__inner']}>
          <MyButton
            onClick={() => context.clearCart()}
            className={styles['cart__btn']}
            disabled={context.items.length === 0}
            type="button"
          >
            Purchase
          </MyButton>
          {context.items.length === 0 ? <EmptyCart /> : <CartWithProducts />}
        </div>
      </Container>
    </section>
  )
}

export default CartComponent
