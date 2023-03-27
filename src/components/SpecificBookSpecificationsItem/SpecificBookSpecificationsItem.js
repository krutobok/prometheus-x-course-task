import styles from './SpecificBookSpecificationsItem.module.css'

const SpecificBookSpecificationsItem = ({ title, text }) => {
  return (
    <div className={styles['book__specification-item']}>
      <dt className={styles['book__specification-title']}>{title}</dt>
      {text && <dd className={styles['book__specification-text']}>{text}</dd>}
    </div>
  )
}

export default SpecificBookSpecificationsItem
