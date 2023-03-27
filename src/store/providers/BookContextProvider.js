import { useEffect, useState } from 'react'
import booksContext from '../context/bookContext'

const BookContextProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [error, setError] = useState(null)
  const [isCheckedAnotherUrl] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isAlreadyFiltered, setIsAlreadyFiltered] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    const fakeFetch = async (url) => {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Something went wrong...')
      }
      const data = await response.json()
      return data
    }
    const request = async (url) => {
      try {
        const data = await fakeFetch(url)
        setBooks(data.books)
      } catch (error) {
        setError(error.message)
      }
      setIsLoading(false)
    }
    if (!isCheckedAnotherUrl && !error) {
      request('./books.json')
    }
    if (!isCheckedAnotherUrl && error) {
      request('../books.json')
    }
  }, [error, isCheckedAnotherUrl])

  const defaultValue = {
    items: books,
    error,
    isLoading,
    isAlreadyFiltered,
    setIsAlreadyFiltered: (state) => setIsAlreadyFiltered(state),
  }
  return (
    <booksContext.Provider value={defaultValue}>
      {children}
    </booksContext.Provider>
  )
}

export default BookContextProvider
