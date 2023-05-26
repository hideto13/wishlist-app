import { useState, useEffect } from 'react'
import { getUser } from '../api'

const useUserInfo = () => {
  const [token, setToken] = useState(null)

  function checkUser() {
    const token = localStorage.getItem('Token')

    if (!token) return
    getUser(token)
      .then(res => {
        setToken(token)
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
  }
}

export default useUserInfo
