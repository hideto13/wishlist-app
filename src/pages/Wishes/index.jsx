import { useState, useEffect, useContext } from 'react'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Wish from '../../components/Wish'
import PageContainer from '../../components/PageContainer'
import { getUserWishes } from '../../api'
import { UserContext } from '../../contexts/UserContext'
import { WishesList } from './Wishes.styled'

function Wishes() {
  const { token } = useContext(UserContext)
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

  return (
    <PageContainer>
      <Title name={'All my wishes...'} />
      <WishesList>
        {wishes.map(wish => (
          <Wish price={'100'} key={wish._id} {...wish} />
        ))}
      </WishesList>
      <Button name={'add one'} />
    </PageContainer>
  )
}

export default Wishes
