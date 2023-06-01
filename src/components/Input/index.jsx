import { useState } from 'react'
import {
  StyledInput,
  InputContainer,
  InputError,
  PasswordIcon,
} from './Input.styled'

function Input({ label, error, value, onChange, pass, type }) {
  const [showPass, setShowPass] = useState(false)

  return (
    <InputContainer>
      <label>{label}:</label>
      <StyledInput
        value={value}
        onChange={e => onChange(e.target.value)}
        type={pass && !showPass ? 'password' : type}
        autocomplete='off'
      />
      <InputError>{error}</InputError>
      {pass ? (
        showPass ? (
          <PasswordIcon
            onClick={() => setShowPass(!showPass)}
            src={require('../../images/show.svg').default}
          />
        ) : (
          <PasswordIcon
            onClick={() => setShowPass(!showPass)}
            src={require('../../images/notshow.svg').default}
          />
        )
      ) : (
        ''
      )}
    </InputContainer>
  )
}

export default Input
