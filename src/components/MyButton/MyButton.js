import styles from './MyButton.module.css'

const MyButton = ({ children, className = '', ...props }) => {
  return (
    <button className={`${styles['my-button']} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default MyButton
