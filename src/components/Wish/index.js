import { useContext, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { deleteWish } from '../../api'
import FullImageModal from '../FullImageModal'
import EditWishModal from '../EditWishModal'
import { UserContext } from '../../contexts/UserContext'
import {
  WishContainer,
  WishWrapper,
  WishImg,
  WishTextContainer,
  WishTextWrapper,
  WishLink,
  WishName,
  WishLinkWrapper,
  WishPrice,
  WishDescription,
  DeleteButton,
  EditButton,
} from './Wish.styled'

function Wish({ name, price, link, description, image, isOwnerCard, _id }) {
  const { token, getWishes } = useContext(UserContext)
  const [showFullImage, setShowFullImage] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  const handleOpenModal = () => setModalOpen(true)
  const handleCloseModal = () => setModalOpen(false)

  const handleShowFullImage = () => setShowFullImage(true)
  const handleHideFullImage = () => setShowFullImage(false)

  function handleDelete() {
    deleteWish(_id, token)
      .then(res => {
        getWishes()
      })
      .catch(e => console.log(e))
  }

  return (
    <WishContainer>
      {isOwnerCard && (
        <DeleteButton onClick={handleDelete}>
          <img
            src={require('../../images/delete.svg').default}
            width='20px'
            height='20px'
            alt='delete'
          />
        </DeleteButton>
      )}
      {isOwnerCard && (
        <EditButton onClick={handleOpenModal}>
          <img
            src={require('../../images/edit.svg').default}
            width='20px'
            height='20px'
            alt='edit'
          />
        </EditButton>
      )}
      <WishImg src={image} onClick={handleShowFullImage} />
      <WishWrapper>
        <WishTextContainer>
          <WishTextWrapper>
            <WishName>{name}</WishName>
            {link && (
              <WishLinkWrapper>
                <WishLink href={link} target='_blank' rel='noreferrer'>
                  {link}
                </WishLink>
              </WishLinkWrapper>
            )}
          </WishTextWrapper>
          <WishPrice>
            {price ? '~' + price : '?'} <FormattedMessage id='currencySymbol' />
          </WishPrice>
        </WishTextContainer>
        <WishDescription>{description}</WishDescription>
      </WishWrapper>
      {image && (
        <FullImageModal
          image={image}
          isOpen={showFullImage}
          onClose={handleHideFullImage}
          name={name}
        />
      )}
      <EditWishModal isOpen={modalOpen} onClose={handleCloseModal} id={_id} />
    </WishContainer>
  )
}

export default Wish
