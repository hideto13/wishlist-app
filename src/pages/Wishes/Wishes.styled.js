import styled from 'styled-components'

export const WishesContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  box-sizing: border-box;
  padding: 100px 50px 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const WishesList = styled.div`
  width: 100%;
  display: grid;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  grid-template-columns: repeat(auto-fit, minmax(min-content, 282px));
  column-gap: 17px;
  row-gap: 20px;
  min-height: 50px;
  margin-bottom: 60px;
  justify-content: center;
`
