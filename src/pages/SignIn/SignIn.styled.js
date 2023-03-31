import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const InputsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 600px;
  flex-direction: column;
  gap: 24px;
  margin: 20px 0;
`
export const StyledLink = styled(Link)`
  color: #4f273a;
`

export const LinkContainer = styled.p`
  margin: 0 0 90px;

  @media (max-width: 767px) {
    margin: 0 0 70px;
  }
`
