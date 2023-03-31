import { StyledInput, InputContainer, InputError } from './Input.styled'
function Input({ label, error, value, onChange }) {
  return (
    <InputContainer>
      <label>{label}:</label>
      <StyledInput value={value} onChange={e => onChange(e.target.value)} />
      <InputError>{error}</InputError>
    </InputContainer>
  )
}

export default Input
