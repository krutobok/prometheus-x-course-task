import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import MyRoutes from './pages/myRotes'
import BookContextProvider from './store/providers/BookContextProvider'
import UserContextProvider from './store/providers/UserContextProvider'
import CartContextProvider from './store/providers/CartContextProvider'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <CartContextProvider>
    <UserContextProvider>
      <BookContextProvider>
        <BrowserRouter>
          <MyRoutes />
        </BrowserRouter>
      </BookContextProvider>
    </UserContextProvider>
  </CartContextProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
