import styled from 'styled-components'

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  padding: 13px 0;
  background: transparent;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  color: #4f273a;
  background-color: transparent !important;

  &::-internal-autofill-selected {
    background-color: transparent;
  }
`

export const InputContainer = styled.div`
  margin-bottom: 18px;
  width: 100%;
  max-width: 600px;
  position: relative;
`

export const InputError = styled.span`
  color: red;
  font-size: 12px;
  text-transform: lowercase;
  min-height: 14px;
  display: block;
  margin: 5px 0;
`

export const PasswordIcon = styled.img`
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  width: 30px;
  height: 30px;
`
