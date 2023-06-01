import React from 'react'
import useUserInfo from '../hooks/useUserInfo'
import useWishes from '../hooks/useWishes'

export const UserContext = React.createContext()

const UserProvider = ({ children }) => {
  const { token, checkUser, userId } = useUserInfo()
  const { wishes, getWishes } = useWishes(token)

  return (
    <UserContext.Provider
      value={{
        token,
        checkUser,
        userId,
        wishes,
        getWishes,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
