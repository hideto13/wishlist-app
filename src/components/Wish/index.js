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
} from './Wish.styled'

function Wish({ name, price, link, description, image }) {
  return (
    <WishContainer>
      <WishImg src={image} />
      <WishWrapper>
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
        <WishDescription>{description}</WishDescription>
      </WishWrapper>
    </WishContainer>
  )
}

export default Wish
