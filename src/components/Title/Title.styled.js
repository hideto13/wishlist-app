import styled from 'styled-components'

export const AppTitle = styled.h1`
  text-transform: uppercase;
  font-size: 48px;
  line-height: 70px;
  margin: 40px 0;
  text-align: center;
  max-width: 800px;
  @media (max-width: 1023px) {
    margin: 70px 0 30px;
  }
  @media (max-width: 767px) {
    margin: 40px 0 10px;
    font-size: 36px;
    line-height: 48px;
  }
`
