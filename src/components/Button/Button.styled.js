import styled from 'styled-components'

export const AppButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ color }) => color || '#bebee7'};
  color: #4f273a;
  padding: ${({ google }) => (google ? '10px 20px' : '20px 40px')};
  border: none;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px #a2a2d0;
  min-width: 220px;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;
  font-family: 'Josefin Sans', sans-serif;

  &:hover {
    box-shadow: 0px 0px 13px 3px #a2a2d0;
  }

  @media (max-width: 767px) {
    padding: ${({ google }) => (google ? '8px 20px' : '14px 40px')};
  }
`
