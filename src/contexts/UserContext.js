import React from 'react'
import useUserInfo from '../hooks/useUserInfo'

export const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const { token, checkUser, userId } = useUserInfo()

  return (
    <UserContext.Provider
      value={{
        token,
        checkUser,
        userId,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
