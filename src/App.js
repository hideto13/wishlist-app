import { useState } from 'react'
import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import Main from './pages/Main'
import MyWishes from './pages/MyWishes'
import Wishes from './pages/Wishes'
import Registration from './pages/Registration'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'
import RedirectRoute from './components/RedirectRoute'
import UserProvider from './contexts/UserContext'
import { LOCALES } from './i18n/locales'
import { messages } from './i18n/messages'

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background: #ebd5dd;
  background: linear-gradient(#ebd5dd 85%, #e3a9be 99%);
`
const browserLocale = navigator.language

function App() {
  const initialLocale = Object.values(LOCALES).includes(browserLocale)
    ? browserLocale
    : LOCALES.ENGLISH
  const [currentLocale, setCurrentLocale] = useState(initialLocale)

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.ENGLISH}
    >
      <UserProvider>
        <AppContainer>
          <Header />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <RedirectRoute>
                  <Main />
                </RedirectRoute>
              }
            />
            <Route path='/wishes/:userId/*' element={<Wishes />} />
            <Route path='/wishes/*' element={<MyWishes />} />
            <Route
              exact
              path='/sign-up'
              element={
                <RedirectRoute>
                  <Registration />
                </RedirectRoute>
              }
            />
            <Route
              exact
              path='/sign-in'
              element={
                <RedirectRoute>
                  <SignIn />
                </RedirectRoute>
              }
            />
            <Route path='*' element={<Main />} />
          </Routes>
          <Footer />
        </AppContainer>
      </UserProvider>
    </IntlProvider>
  )
}

export default App
