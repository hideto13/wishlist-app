import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { UserContext } from '../../contexts/UserContext'
import {
  AppHeader,
  AppContainer,
  LogoContainer,
  LogoText,
  StyledLink,
  NavContainer,
  NavText,
  Navigation,
} from './Header.styled'

function Header() {
  const { token } = useContext(UserContext)

  return (
    <AppHeader>
      <AppContainer>
        <NavContainer>
          <LogoContainer to='/'>
            <img
              width='40px'
              height='40px'
              src={require('../../images/Logo.png')}
              alt='logo'
            />
            <LogoText>WishList</LogoText>
          </LogoContainer>
          {token && (
            <Navigation>
              <LogoContainer to='/wishes'>
                <NavText>
                  <FormattedMessage id='headerNavWishes' />
                </NavText>
              </LogoContainer>
              <LogoContainer to='/info'>
                <NavText>
                  <FormattedMessage id='headerNavAbout' />
                </NavText>
              </LogoContainer>
            </Navigation>
          )}
        </NavContainer>

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
