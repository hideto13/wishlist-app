import { useState, useEffect, useContext } from 'react'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Wish from '../../components/Wish'
import PageContainer from '../../components/PageContainer'
import AddWishModal from '../../components/AddWishModal'
import { getUserWishes } from '../../api'
import { UserContext } from '../../contexts/UserContext'
import { WishesList } from './Wishes.styled'

function Wishes() {
  const { token } = useContext(UserContext)
  const [wishes, setWishes] = useState([])
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

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
      <Button name={'add one'} onClick={handleOpenModal} />
      <AddWishModal isOpen={modalOpen} onClose={handleCloseModal} />
    </PageContainer>
  )
}

export default Wishes
