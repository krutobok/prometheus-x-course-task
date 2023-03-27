import styles from './SpecificBookSpecifications.module.css'
import SpecificBookSpecificationsItem from '../SpecificBookSpecificationsItem/SpecificBookSpecificationsItem'

const SpecificBookSpecifications = ({ book }) => {
  return (
    <dl className={styles['book__specification']}>
      <SpecificBookSpecificationsItem title={book.title} />
      <SpecificBookSpecificationsItem title="Book author:" text={book.author} />
      {/* <SpecificBookSpecificationsItem title="Book level:" text={book.level} />
      <SpecificBookSpecificationsItem title="Book tags:" text={book.tags} /> */}
    </dl>
  )
}

export default SpecificBookSpecifications
