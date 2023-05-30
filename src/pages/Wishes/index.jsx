import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Title from '../../components/Title'
import Wish from '../../components/Wish'
import PageContainer from '../../components/PageContainer'
import { getUserWishesById } from '../../api'
import { WishesList } from './Wishes.styled'

function Wishes() {
  const { userId } = useParams()
  const [wishes, setWishes] = useState([])
  const [incorrectUserId, setIncorrectUserId] = useState(false)

  function getWishesById() {
    getUserWishesById(userId)
      .then(res => {
        setWishes(res)
      })
      .catch(e => {
        console.log(e)
        setIncorrectUserId(true)
      })
  }

  useEffect(() => {
    if (userId) getWishesById()
  }, [userId])

  if (!userId || incorrectUserId)
    return (
      <PageContainer>
        <Title name={'No wishes yet'} />
      </PageContainer>
    )

  return (
    <PageContainer>
      <Title name={'Please, gift me...'} />
      <WishesList>
        {wishes.map(wish => (
          <Wish key={wish._id} {...wish} />
        ))}
      </WishesList>
    </PageContainer>
  )
}

export default Wishes
