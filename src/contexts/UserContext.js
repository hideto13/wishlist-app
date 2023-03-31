import React from 'react'
import useUserInfo from '../hooks/useUserInfo'

export const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const { token, getToken } = useUserInfo()

  return (
    <UserContext.Provider
      value={{
        token,
        getToken,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
