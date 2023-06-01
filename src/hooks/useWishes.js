import { useState, useEffect,  } from 'react'
import { getUserWishes } from '../api'

const useWishes = token => {
  const [wishes, setWishes] = useState([])

  function getWishes() {
    getUserWishes(token)
      .then(res => {
        setWishes(res)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    if (token) getWishes()
  }, [token])

  return {
    wishes,
    getWishes,
  }
}

export default useWishes
