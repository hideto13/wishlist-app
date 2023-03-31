import { useState, useEffect } from 'react'

const useUserInfo = () => {
  const [token, setToken] = useState(null)

  function getToken() {
    const res = localStorage.getItem('Token')
    setToken(res)
  }

  useEffect(() => {
    getToken()
  }, [localStorage])

  return {
    token,
    getToken,
  }
}

export default useUserInfo
