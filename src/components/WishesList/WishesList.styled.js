import styled from 'styled-components'

export const WishesList = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 300px));
  column-gap: 17px;
  row-gap: 20px;
  min-height: 50px;
  margin: 40px 0 60px;
  justify-content: center;
  @media (max-width: 767px) {
    margin: 10px 0 40px;
  }
`
