import { AppFooter, AppContainer } from './Footer.styled'

function Footer() {
  return (
    <AppFooter>
      <AppContainer>
        <img
          width='30px'
          height='30px'
          src={require('../../images/Logo.png')}
          alt='logo'
        />
        <p>Copyright © {new Date().getFullYear()} WishList</p>
      </AppContainer>
    </AppFooter>
  )
}

export default Footer
