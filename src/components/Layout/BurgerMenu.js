import { useState } from 'react'
import HeaderNav from './HeaderNav'
import styles from './BurgerMenu.module.css'

function BurgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <button className={styles['burger']} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      {isMenuOpen && <HeaderNav mobile={true} />}
    </>
  )
}

export default BurgerMenu
