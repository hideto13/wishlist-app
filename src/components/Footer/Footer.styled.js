import styled from 'styled-components'

export const AppFooter = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 5;
  background: rgba(16, 16, 44, 0.2);
  backdrop-filter: blur(10px);
  padding: 24px;
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
