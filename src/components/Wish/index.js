import {
  WishContainer,
  WishImg,
  WishTextContainer,
  WishTextWrapper,
  WishLink,
  WishName,
  WishLinkWrapper,
  WishPrice,
} from './Wish.styled'
function Wish({ name, price, link }) {
  return (
    <WishContainer>
      <WishImg src={require('../../images/wish.jpg')} />
      <WishTextContainer>
        <WishTextWrapper>
          <WishName>{name}</WishName>
          <WishLinkWrapper>
            <WishLink href={link} target='_blank' rel='noreferrer'>
              {link}
            </WishLink>
          </WishLinkWrapper>
        </WishTextWrapper>
        <WishPrice>~ {price} $</WishPrice>
      </WishTextContainer>
    </WishContainer>
  )
}

export default Wish
