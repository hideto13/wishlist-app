import React from 'react'
import useUserInfo from '../hooks/useUserInfo'

export const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const { token, checkUser } = useUserInfo()

  return (
    <UserContext.Provider
      value={{
        token,
        checkUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
