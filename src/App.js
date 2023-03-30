import styled from 'styled-components'
import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import Wishes from './pages/Wishes'
import Header from './components/Header'
import Footer from './components/Footer'

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background: #ebd5dd;
  background: linear-gradient(#ebd5dd 85%, #e3a9be 99%);
`
function App() {
  return (
    <AppContainer>
      <Header />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/wishes/*' element={<Wishes />} />
        <Route path='*' element={<Main />} />
      </Routes>
      <Footer />
    </AppContainer>
  )
}

export default App
