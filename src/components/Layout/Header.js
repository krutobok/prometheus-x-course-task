import styles from './Header.module.css'
import Container from '../UI/Container'
import HeaderNav from './HeaderNav'
import { useContext, useState, useEffect } from 'react'
import userContext from '../../store/user-context'
import BurgerMenu from './BurgerMenu'

const Header = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const user = useContext(userContext)
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles['header__inner']}>
          <p className={styles['header__logo']}>
            Tkachenko Olexander
            {/* JS BAND STORE */}
          </p>
          {user.isUserAuth &&
            (windowSize.width > 480 ? <HeaderNav /> : <BurgerMenu />)}
        </div>
      </Container>
    </header>
  )
}

export default Header
