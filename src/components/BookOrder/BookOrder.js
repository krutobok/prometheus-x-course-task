import { useContext, useState } from 'react'
import cartContext from '../../store/context/cartContext'
import MyButton from '../MyButton/MyButton'
import styles from './BookOrder.module.css'

const BookOrder = ({ book }) => {
  const context = useContext(cartContext)
  const [count, setCount] = useState(1)
  const bookIndex = context.items.findIndex((item) => book.id === item.id)
  const maxBooksValue =
    bookIndex !== -1 ? 42 - context.items[bookIndex].count : 42
  const onInputHandler = (e) => {
    const value = e.target.value
    let newValue = e.target.value
    if (value > maxBooksValue) newValue = maxBooksValue
    if (value < 1) newValue = 1
    setCount(newValue)
  }
  const formSubmitHandler = (e) => {
    e.preventDefault()
    context.addItems({
      title: book.title,
      id: book.id,
      price: book.price,
      count: count,
    })
    setCount(1)
  }
  return (
    <form onSubmit={formSubmitHandler} className={styles['book__order']}>
      <p className={`${styles['book__price']} ${styles['form-element']}`}>
        <span className={styles['book__price-p']}>Price, $:</span>
        <span className={styles['book__price-value']}>{book.price}</span>
      </p>
      <div
        className={`${styles['book__count-inner']} ${styles['form-element']}`}
      >
        <label htmlFor="count" className={styles['book__count-label']}>
          Count:
        </label>
        <input
          disabled={!maxBooksValue}
          data-testid="count"
          type="number"
          className={styles['book__count-input']}
          id="count"
          value={count}
          onInput={onInputHandler}
        />
      </div>
      <p className={`${styles['book__total-price']} ${styles['form-element']}`}>
        <span className={styles['book__total-price-p']}>Total price, $:</span>
        <span data-testid="price" className={styles['book__total-price-value']}>
          {(book.price * count).toFixed(2)}
        </span>
      </p>
      <MyButton disabled={!maxBooksValue} className={styles['book__order-btn']}>
        Add to cart
      </MyButton>
    </form>
  )
}

export default BookOrder
