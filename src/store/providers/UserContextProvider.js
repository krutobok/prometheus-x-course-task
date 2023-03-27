import { useState } from 'react'
import userContext from '../context/userContext'

const UserContextProvider = ({ children }) => {
  const username = localStorage.getItem('username')
  const auth = localStorage.getItem('username')
  const [userName, setUserName] = useState(username)
  const [isUserAuth, setIsUserAuth] = useState(!!auth)
  const setUserNameHandler = (username) => {
    setUserName(username)
    setIsUserAuth(true)
    localStorage.setItem('auth', 'true')
    localStorage.setItem('username', username)
  }
  const logOut = () => {
    setUserName(null)
    setIsUserAuth(false)
    localStorage.removeItem('auth')
    localStorage.removeItem('username')
  }
  const defaultValue = {
    userName,
    isUserAuth,
    setUserName: setUserNameHandler,
    logOut,
  }
  return (
    <userContext.Provider value={defaultValue}>{children}</userContext.Provider>
  )
}

export default UserContextProvider
