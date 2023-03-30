import styled from 'styled-components'
import Main from './pages/Main'
import Header from './components/Header'
import Footer from './components/Footer'

const AppContainer = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background: #e3a9be;
  background: linear-gradient(#e3a9be 85%, #ac7580 100%);
`
function App() {
  return (
    <AppContainer>
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  )
}

export default App
