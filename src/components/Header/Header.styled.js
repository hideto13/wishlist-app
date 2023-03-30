import styled from 'styled-components'

export const AppHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  background: rgba(16, 16, 44, 0.2);
  backdrop-filter: blur(10px);
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const AppContainer = styled.div`
  max-width: 1600px;
  width: 100%;
`

export const LogoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`

export const LogoText = styled.p`
  margin: 0;
  font-size: 24px;
  font-style: italic;
  font-weight: 500;
`
