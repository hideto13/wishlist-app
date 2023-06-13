import styled from 'styled-components'

export const CopyButton = styled.button`
  background-color: rgb(79, 39, 58);
  padding: 12px;
  border: none;
  line-height: 0;
  border-radius: 50%;
  cursor: pointer;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 150ms ease-in-out;

  @media (max-width: 767px) {
    padding: 10px;
  }
`

export const CopyInput = styled.input`
  opacity: 0;
  position: absolute;
  top: -5000px;
  left: -5000px;
  width: 1px;
  height: 1px;
`

export const ShareContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 12px;
  flex-wrap: wrap;
  margin: 0 auto;
  line-height: 0;
  @media (max-width: 767px) {
    max-width: 200px;
  }
`
