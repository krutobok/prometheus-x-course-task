import React from 'react'

const booksContext = React.createContext({
  items: [],
  error: '',
  isLoading: true,
  isAlreadyFiltered: false,
  setIsAlreadyFiltered: () => {},
})
export default booksContext
