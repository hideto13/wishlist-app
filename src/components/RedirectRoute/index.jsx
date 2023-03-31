import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

const RedirectRoute = ({ children }) => {
  const { token } = useContext(UserContext)
  return !token ? children : <Navigate to='/wishes' />
}

export default RedirectRoute
