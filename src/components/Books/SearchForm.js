import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import booksContext from '../../store/book-context'
import styles from './SearchForm.module.css'

const SearchForm = ({ onFilter }) => {
  const [priceFilter, setPriceFilter] = useState(0)
  const context = useContext(booksContext)
  const isBooksLoaded = context.items.length > 0
  const inputRef = useRef()
  const filteredBooksFunction = useCallback(
    (filter = priceFilter) => {
      const filteredBooks = context.items.filter((book) => {
        if (
          book.title
            .toLowerCase()
            .includes(inputRef.current.value.toLowerCase())
        ) {
          switch (filter) {
            case 0:
              return true
            case 1:
              if (book.price <= 15 && book.price > 0) {
                return true
              }
              return false
            case 2:
              if (book.price <= 30 && book.price > 15) {
                return true
              }
              return false
            case 3:
              if (book.price > 30) {
                return true
              }
              return false
            default:
              return false
          }
        }
        return false
      })
      if (isBooksLoaded) {
        context.setIsAlreadyFiltered(true)
      }
      onFilter(filteredBooks)
    },
    [isBooksLoaded, onFilter, priceFilter, context]
  )

  useEffect(() => {
    filteredBooksFunction()
  }, [isBooksLoaded, filteredBooksFunction])
  const submitFormHandler = (e) => {
    e.preventDefault()
    filteredBooksFunction()
  }
  const selectChangeHandler = (e) => {
    setPriceFilter(+e.target.value)
    filteredBooksFunction(+e.target.value)
  }
  return (
    <form
      onSubmit={submitFormHandler}
      className={styles['book-list__search-form']}
    >
      <div className={styles['search-form__btn-inner']}>
        <input
          className={styles['search-form__input']}
          placeholder="Search by book name"
          type="text"
          ref={inputRef}
        />
        <button className={styles['search-form__btn']} type="submit">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="30px"
            viewBox="0 0 490 490"
          >
            <path
              fill="none"
              stroke="#204fd8"
              strokeWidth="36"
              d="m280,278a153,153 0 1,0-2,2l170,170m-91-117 110,110-26,26-110-110"
            />
          </svg>
        </button>
      </div>
      <select
        onChange={selectChangeHandler}
        defaultValue="0"
        className={styles['search-form__select']}
      >
        <option value="0">All</option>
        <option value="1">{'0 < price < 15'}</option>
        <option value="2">{'15 < price < 30'}</option>
        <option value="3">{'price > 30'}</option>
      </select>
    </form>
  )
}

export default SearchForm
