import { useState, useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import AddWishModal from '../../components/AddWishModal'
import ShareModal from '../../components/ShareModal'
import WishesListComponent from '../../components/WishesList'
import { UserContext } from '../../contexts/UserContext'
import { ShareButton, TitleContainer } from './MyWishes.styled'

function MyWishes() {
  const { token, userId, wishes } = useContext(UserContext)
  const [modalOpen, setModalOpen] = useState(false)
  const [shareModalOpen, setShareModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  const handleOpenShareModal = () => setShareModalOpen(true)
  const handleCloseShareModal = () => setShareModalOpen(false)

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
        <ShareButton onClick={handleOpenShareModal}>
          <img
            src={require('../../images/share.svg').default}
            alt='share'
            width='30px'
            height='30px'
          />
        </ShareButton>
      </TitleContainer>
      <WishesListComponent wishes={wishes} isOwnerCard />
      <Button
        name={<FormattedMessage id='myWishesButton' />}
        onClick={handleOpenModal}
      />
      <AddWishModal isOpen={modalOpen} onClose={handleCloseModal} />
      <ShareModal
        isOpen={shareModalOpen}
        onClose={handleCloseShareModal}
        link={window.location.href + '/' + userId}
      />
    </PageContainer>
  )
}

export default MyWishes
