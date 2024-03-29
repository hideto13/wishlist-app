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
  margin: 0 0 20px;

  @media (max-width: 767px) {
    margin: 0 0 20px;
  }
`

export const FormContainer = styled.form`
  display: flex;

  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
`

export const ButtonContainer = styled.div`
  margin: 20px 0 0;

  @media (max-width: 767px) {
    margin: 10px 0 0;
  } 
`
