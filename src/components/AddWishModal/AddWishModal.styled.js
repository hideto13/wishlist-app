import styled from 'styled-components'

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
`

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  margin: 0 0 12px;
  min-height: 13px;
`

export const ImageToogle = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const UploadInput = styled.input`
  visibility: hidden;
  padding: 20px;
  &::-webkit-file-upload-button {
    visibility: hidden;
  }
  &::before {
    content: 'Select image';
    display: inline-block;
    visibility: visible;
    -webkit-user-select: none;
    background-color: rgb(79, 39, 58);
    color: white;
    padding: 10px 20px;
    border: none;
    text-transform: uppercase;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px #a2a2d0;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
    font-family: 'Josefin Sans', sans-serif;
  }
  &:hover::before {
    box-shadow: 0px 0px 13px 3px rgb(79, 39, 58);
  }
`
