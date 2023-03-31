import {
  AppHeader,
  AppContainer,
  LogoContainer,
  LogoText,
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
      </AppContainer>
    </AppHeader>
  )
}

export default Header
