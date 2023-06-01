import styled from 'styled-components'

export const AppFooter = styled.div`
  background: rgba(16, 16, 44, 0.2);
  backdrop-filter: blur(10px);
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const AppContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`
