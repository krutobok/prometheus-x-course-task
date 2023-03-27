import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import styles from './App.module.css'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
