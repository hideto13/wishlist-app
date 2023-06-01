import { useState, useEffect, useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '../../components/Button'
import Title from '../../components/Title'
import Wish from '../../components/Wish'
import PageContainer from '../../components/PageContainer'
import AddWishModal from '../../components/AddWishModal'
import { getUserWishes } from '../../api'
import { UserContext } from '../../contexts/UserContext'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import {
  WishesList,
  ShareButton,
  TitleContainer,
  ShareInput,
} from './MyWishes.styled'

function MyWishes() {
  const { token, userId } = useContext(UserContext)
  const [linkCopied, copylLink, linkRef] = useCopyToClipboard()

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

  if (!token)
    return (
      <PageContainer>
        <Title name={<FormattedMessage id='myWishesErrorTitle' />} />
      </PageContainer>
    )

  return (
    <PageContainer>
      <TitleContainer>
        <Title name={<FormattedMessage id='myWishesTitle' />} />
        <ShareButton onClick={copylLink}>
          {linkCopied ? (
            <img
              src={require('../../images/success.svg').default}
              alt='success'
              width='30px'
              height='30px'
            />
          ) : (
            <img
              src={require('../../images/share.svg').default}
              alt='share'
              width='30px'
              height='30px'
            />
          )}
        </ShareButton>
        <ShareInput
          ref={linkRef}
          value={window.location.href + '/' + userId}
          readOnly
        />
      </TitleContainer>
      <WishesList>
        {wishes.map(wish => (
          <Wish key={wish._id} {...wish} isOwnerCard />
        ))}
      </WishesList>
      <Button
        name={<FormattedMessage id='myWishesButton' />}
        onClick={handleOpenModal}
      />
      <AddWishModal isOpen={modalOpen} onClose={handleCloseModal} />
    </PageContainer>
  )
}

export default MyWishes
