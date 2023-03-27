import { useCallback, useState } from 'react'
import { useContext } from 'react'
import booksContext from '../../store/context/bookContext'
import Container from '../Container/Container'
import BooksList from '../BooksList/BooksList'
import SearchForm from '../SearchForm/SearchForm'

const BooksComponent = () => {
  const context = useContext(booksContext)
  const [filteredBooks, setFilteredBooks] = useState(context.items)
  const setFilteredBooksHandler = useCallback((books) => {
    setFilteredBooks(books)
  }, [])
  return (
    <section className="book-list">
      <Container>
        <div className="book-list__inner">
          <SearchForm onFilter={setFilteredBooksHandler} />
          <BooksList filteredBooks={filteredBooks} />
        </div>
      </Container>
    </section>
  )
}

export default BooksComponent
