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

export const ShareButton = styled.button`
  background-color: ${({ color }) => color || '#bebee7'};
  padding: 15px;
  border: none;
  line-height: 0;
  border-radius: 50%;

  cursor: pointer;
  box-shadow: 0px 0px 5px 1px #a2a2d0;

  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 0px 13px 3px #a2a2d0;
  }

  @media (max-width: 767px) {
    padding: 10px;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

export const ShareInput = styled.input`
  opacity: 0;
  position: absolute;
  top: -5000px;
  left: -5000px;
  width: 1px;
  height: 1px;
`
