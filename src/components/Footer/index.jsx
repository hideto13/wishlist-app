import { AppFooter, AppContainer, FooterWrapper } from './Footer.styled'

function Footer() {
  return (
    <AppFooter>
      <AppContainer>
        <FooterWrapper>
          <img
            width='30px'
            height='30px'
            src={require('../../images/Logo.png')}
            alt='logo'
          />
          <p>Copyright © {new Date().getFullYear()} WishList</p>
        </FooterWrapper>
        <a href='https://github.com/hideto13' target='_blank' rel='noreferrer'>
          <img
            width='30px'
            height='30px'
            src={require('../../images/github.png')}
            alt='logo'
          />
        </a>
      </AppContainer>
    </AppFooter>
  )
}

export default Footer
