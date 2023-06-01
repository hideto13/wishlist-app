import { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { deleteWish } from '../../api'
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
} from './Wish.styled'

function Wish({ name, price, link, description, image, isOwnerCard, _id }) {
  const { token, getWishes } = useContext(UserContext)

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
      <WishImg src={image} />
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
    </WishContainer>
  )
}

export default Wish
