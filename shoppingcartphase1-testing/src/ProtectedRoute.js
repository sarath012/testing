import React, { useContext } from 'react'
import Login from './Components/Login/Login'
import Products from './Components/Products/Products'
import { appContext } from './Context/AppContext';

export const ProtectedRoute = () => {
    const {
        isLoggedIn
      } = useContext(appContext);
  return (
    isLoggedIn ? <Products /> : <Login />
  )
}
