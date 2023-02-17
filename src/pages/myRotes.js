import { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import App from '../App'
import BooksComponent from '../components/Books/BooksComponent'
import NotFound from '../components/Layout/NotFound'
import userContext from '../store/user-context'
import Cart from './Cart'
import SignIn from './SignIn'
import SpecificBook from './SpecificBook'

export default function MyRoutes() {
  const context = useContext(userContext)
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {context.isUserAuth ? (
          <>
            <Route path="signin" element={<Navigate to="books" />} />
            <Route index element={<Navigate to="books" />} />
            <Route path="books" element={<BooksComponent />} />
            <Route path="books/:bookId" element={<SpecificBook />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route path="signin" element={<SignIn />} />
            <Route index element={<Navigate to="signin" />} />
            <Route path="*" element={<Navigate to="signin" />} />
          </>
        )}
      </Route>
    </Routes>
  )
}
