import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './HeaderNav.module.css'
import cartImage from '../../assets/images/cart.svg'
import avatarImage from '../../assets/images/avatar.png'
import userContext from '../../store/user-context'
import MyButton from '../UI/MyButton'

const HeaderNav = ({ mobile = false }) => {
  const navigation = useNavigate()
  const user = useContext(userContext)
  const logOutHandler = () => {
    navigation('/signin')
    user.logOut()
  }
  return (
    <nav
      className={`${styles['header__nav']} ${mobile ? styles['mobile'] : ''} `}
    >
      <Link to="/cart" className={styles['header__btn-cart']}>
        <img
          src={cartImage}
          alt="cart"
          className={styles['header__btn-basket__img']}
        />
      </Link>
      <MyButton
        onClick={logOutHandler}
        className={styles['header__btn-sing-out']}
        type="button"
      >
        Sign-out
      </MyButton>
      <p className={styles['header__username-link']}>
        <img
          className={styles['header__username-img']}
          src={avatarImage}
          alt="avatar"
        />
        <span className={styles['header__username-span']}>{user.userName}</span>
      </p>
    </nav>
  )
}

export default HeaderNav
