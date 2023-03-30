import { StyledInput, InputContainer } from './Input.styled'
function Input({ label }) {
  return (
    <InputContainer>
      <label>{label}:</label>
      <StyledInput />
    </InputContainer>
  )
}

export default Input
