import styled from 'styled-components'

export const Modal = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(29, 31, 42, 0.9);

  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 100;
  opacity: 0;
  transition: visibility 0.5s, opacity 0.5s ease;

  visibility: ${({ isOpen }) => {
    if (isOpen) {
      return 'visible'
    }
    return 'hidden'
  }};

  opacity: ${({ isOpen }) => {
    if (isOpen) {
      return '1'
    }
    return '0'
  }};
`

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 477px;
  background-color: rgb(190, 190, 231);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(73, 158, 255, 0.3);
  padding: 40px;
  position: relative;
  border-radius: 20px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.15);
  box-sizing: border-box;
  @media (max-width: 768px) {
    max-width: 336px;
    border-radius: 12px;
    padding: 24px;
  }
`

export const ModalTitle = styled.h2`
  color: rgb(79, 39, 58);
  font-size: 24px;
  font-style: italic;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 1px;
  text-align: left;
  margin: 0 0 16px;
  text-transform: uppercase;
`

export const ModalInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  display: block;
  font-size: 20px;

  font-weight: 700;
  line-height: 32px;
  letter-spacing: 0.5px;
  padding: 12px;
  color: rgb(79, 39, 58);
  background-clip: padding-box;
  border: none;
  margin-bottom: 12px;
  border-radius: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  &::placeholder {
    color: #a3a4a9;
    opacity: 0.4;
    line-height: 36px;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 1px rgba(158, 158, 158, 0.25);
  }

  &:disabled {
    background-color: #262a35;
    color: #a3a4a9;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: 0.5px;
    border-radius: 12px;
    padding: 26px 16px 10px;
  }
`

export const ModalLabel = styled.label`
  color: rgb(79, 39, 58);
  font-size: 12px;
  display: block;
  margin-bottom: 4px;
  margin-left: 16px;
  font-weight: 700;
`
