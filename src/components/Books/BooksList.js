import { useContext } from 'react'
import booksContext from '../../store/book-context'
import Book from './Book'
import styles from './BooksList.module.css'

const BooksList = ({ filteredBooks }) => {
  const context = useContext(booksContext)
  // const books = filteredBooks.length > 0 ? filteredBooks : context.items
  return (
    <ul className={styles['book-list__books']}>
      {context.isLoading && <p>Loading books...</p>}
      {context.error && <p>Something went wrong...</p>}
      {filteredBooks.length === 0 && context.isAlreadyFiltered && (
        <p>No books with these parameters were found</p>
      )}
      {filteredBooks.length > 0 &&
        filteredBooks.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            image={book.image}
            title={book.title}
            price={book.price}
            author={book.author}
          />
        ))}
    </ul>
  )
}

export default BooksList
