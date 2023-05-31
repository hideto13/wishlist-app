import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { UserContext } from '../../contexts/UserContext'
import {
  AppHeader,
  AppContainer,
  LogoContainer,
  LogoText,
  StyledLink,
} from './Header.styled'

function Header() {
  const { token } = useContext(UserContext)

  return (
    <AppHeader>
      <AppContainer>
        <LogoContainer to='/'>
          <img
            width='40px'
            height='40px'
            src={require('../../images/Logo.png')}
            alt='logo'
          />
          <LogoText>WishList</LogoText>
        </LogoContainer>
        {!token && (
          <StyledLink to='/sign-in'>
            <FormattedMessage id='headerButton' />
          </StyledLink>
        )}
      </AppContainer>
    </AppHeader>
  )
}

export default Header
