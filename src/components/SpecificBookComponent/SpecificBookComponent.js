import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import booksContext from '../../store/context/bookContext'
import Container from '../Container/Container'
import BookOrder from '../BookOrder/BookOrder'
import styles from './SpecificBookComponent.module.css'
import SpecificBookSpecifications from '../SpecificBookSpecifications/SpecificBookSpecifications'
import notFoundImage from '../../assets/images/imageNotFound.png'

const SpecificBookComponent = () => {
  const params = useParams()
  const books = useContext(booksContext)
  const book = books.items.find((el) => el.id === +params.bookId)
  return (
    <section className={styles['book']}>
      <Container>
        {!book ? (
          <p>Book not found</p>
        ) : (
          <div className={styles['book__inner']}>
            <img
              src={book.image || notFoundImage}
              alt="book"
              className={styles['book__img']}
            />
            <SpecificBookSpecifications book={book} />
            <BookOrder book={book} />
            <p className={styles['book__description']}>{book.description}</p>
          </div>
        )}
      </Container>
    </section>
  )
}

export default SpecificBookComponent
