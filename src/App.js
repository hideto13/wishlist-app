import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Wishes from './pages/Wishes'
import Registration from './pages/Registration'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'
import RedirectRoute from './components/RedirectRoute'
import UserProvider from './contexts/UserContext'

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background: #ebd5dd;
  background: linear-gradient(#ebd5dd 85%, #e3a9be 99%);
`
function App() {
  return (
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
          <Route path='/wishes/*' element={<Wishes />} />
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
  )
}

export default App
