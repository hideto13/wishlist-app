import {
  AppHeader,
  AppContainer,
  LogoContainer,
  LogoText,
  StyledLink,
} from './Header.styled'

function Header() {
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
        <StyledLink to='/sign-in'>Sign In</StyledLink>
      </AppContainer>
    </AppHeader>
  )
}

export default Header
