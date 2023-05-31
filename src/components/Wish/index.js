import { FormattedMessage } from 'react-intl'
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
