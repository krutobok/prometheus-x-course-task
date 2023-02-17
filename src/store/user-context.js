import React from 'react'

const userContext = React.createContext({
  userName: null,
  isUserAuth: false,
  setUserName: () => {},
  logOut: () => {},
})
export default userContext
