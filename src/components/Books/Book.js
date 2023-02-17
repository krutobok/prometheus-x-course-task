import styles from './Book.module.css'
import notFoundImage from '../../assets/images/imageNotFound.png'
import { Link } from 'react-router-dom'

const Book = (props) => {
  const { title, author, id, image, price } = props
  const updatedTitle =
    title.length > 24 ? title.substring(0, 23) + '...' : title
  return (
    <li className={styles['book']}>
      <img
        className={styles['book__img']}
        src={image || notFoundImage}
        alt={title}
      />
      <h6 className={styles['book__name']}>{updatedTitle}</h6>
      <p className={styles['book__author']}>{author}</p>
      <div className={styles['book__bottom']}>
        <p className={styles['book__price']}>{price}$</p>
        <Link to={`${id}`} className={styles['book__link']} href="#">
          View
        </Link>
      </div>
    </li>
  )
}

export default Book
