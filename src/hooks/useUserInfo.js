import { useState, useEffect } from 'react'
import { getUser } from '../api'

const useUserInfo = () => {
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)

  function checkUser() {
    const token = localStorage.getItem('Token')

    if (!token) return
    getUser(token)
      .then(res => {
        setToken(token)
        setUserId(res._id)
      })
      .catch(e => {
        console.log(e)
        localStorage.removeItem('Token')
      })
  }

  useEffect(() => {
    checkUser()
  }, [localStorage])

  return {
    token,
    checkUser,
    userId,
  }
}

export default useUserInfo
