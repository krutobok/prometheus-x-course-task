import { Outlet } from 'react-router-dom'
import Header from './components/Layout/Header'
import styles from './App.module.css'
import Footer from './components/Layout/Footer'

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
