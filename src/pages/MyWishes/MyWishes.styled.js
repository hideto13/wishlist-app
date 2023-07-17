import styled from 'styled-components'

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
