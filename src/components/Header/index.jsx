import React, { useContext, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { Drawer } from '../Drawer'
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
  MenuImg,
} from './Header.styled'

function Header() {
  const { token } = useContext(UserContext)
  const [openDraw, setOpenDraw] = useState(false)

  const handleOpenDraw = () => setOpenDraw(true)
  const handleCloseDraw = () => setOpenDraw(false)

  const Nav = () => {
    return (
      <>
        <LogoContainer onClick={handleCloseDraw} to='/wishes'>
          <NavText>
            <FormattedMessage id='headerNavWishes' />
          </NavText>
        </LogoContainer>
        <LogoContainer onClick={handleCloseDraw} to='/info'>
          <NavText>
            <FormattedMessage id='headerNavAbout' />
          </NavText>
        </LogoContainer>
      </>
    )
  }

  return (
    <>
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
                <Nav />
              </Navigation>
            )}
          </NavContainer>
          {!token && (
            <StyledLink to='/sign-in'>
              <FormattedMessage id='headerButton' />
            </StyledLink>
          )}
          {token && (
            <MenuImg
              src={require('../../images/menu.svg').default}
              onClick={handleOpenDraw}
            />
          )}
        </AppContainer>
      </AppHeader>
      <Drawer isOpen={openDraw} onClose={handleCloseDraw}>
        <Nav />
      </Drawer>
    </>
  )
}

export default Header
