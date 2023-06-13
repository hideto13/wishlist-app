import styled from 'styled-components'

export const AppTitle = styled.h1`
  text-transform: uppercase;
  font-size: 48px;
  line-height: 70px;
  margin: 40px 0;
  text-align: center;
  max-width: 700px;

  @media (max-width: 767px) {
    margin: 24px 0;
    font-size: 30px;
    line-height: 46px;
    max-width: 500px;
  }
`
