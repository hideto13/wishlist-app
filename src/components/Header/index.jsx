import React, {
  useContext,
  useState,
  useRef,
  useCallback,
  useEffect,
} from 'react'
import { FormattedMessage } from 'react-intl'
import { Drawer } from '../Drawer'
import { UserContext } from '../../contexts/UserContext'
import { LOCALES, LOCALES_NAME } from '../../i18n/locales'
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
  SettingsImg,
  SettingsList,
  SettingsListItem,
  SettingsListContainer,
  SettingsTitle,
  InfoContainer,
} from './Header.styled'

function Header({ setCurrentLocale }) {
  const { token } = useContext(UserContext)
  const [openDraw, setOpenDraw] = useState(false)
  const [showSettings, setShowSettings] = useState(false)

  const settings = useRef(null)

  const handleOpenDraw = () => setOpenDraw(true)
  const handleCloseDraw = () => setOpenDraw(false)

  const handleSettings = () => setShowSettings(!showSettings)
  const closeSettings = () => setShowSettings(false)

  function setLocale(locale) {
    localStorage.setItem('locale', locale)
    setCurrentLocale(locale)
    closeSettings()
  }

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

  const handleCloseSettings = useCallback(event => {
    if (
      settings.current &&
      !Array.from(settings.current.getElementsByTagName('*')).includes(
        event.target
      )
    ) {
      closeSettings()
    }
  }, [])

  useEffect(() => {
    window.addEventListener('click', handleCloseSettings)
    return () => {
      window.removeEventListener('click', handleCloseSettings)
    }
  }, [handleCloseSettings])

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
          <InfoContainer>
            {!token && (
              <StyledLink to='/sign-in'>
                <FormattedMessage id='headerButton' />
              </StyledLink>
            )}
            <div ref={settings}>
              <SettingsImg
                src={require('../../images/settings.svg').default}
                onClick={handleSettings}
                alt='settings'
              />
              <SettingsListContainer show={showSettings}>
                <SettingsTitle>
                  <FormattedMessage id='localeTitle' />
                </SettingsTitle>
                <SettingsList>
                  {Object.keys(LOCALES).map((lang, idx) => (
                    <SettingsListItem
                      key={idx}
                      onClick={() => setLocale(LOCALES[lang])}
                    >
                      {LOCALES_NAME[lang]}
                    </SettingsListItem>
                  ))}
                </SettingsList>
              </SettingsListContainer>
            </div>
            {token && (
              <MenuImg
                src={require('../../images/menu.svg').default}
                onClick={handleOpenDraw}
              />
            )}
          </InfoContainer>
        </AppContainer>
      </AppHeader>
      <Drawer isOpen={openDraw} onClose={handleCloseDraw}>
        <Nav />
      </Drawer>
    </>
  )
}

export default Header
