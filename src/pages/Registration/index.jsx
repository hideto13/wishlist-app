import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Input from '../../components/Input'
import {
  InputsContainer,
  StyledLink,
  LinkContainer,
} from './Registration.styled'

function Registration() {
  const navigate = useNavigate()

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')

  function onSubmit(e) {
    e.preventDefault()

    if (!validator.isEmail(email)) {
      setEmailError('Incorrect email address')
    }
    if (password.length < 6) {
      setPasswordError('The password should be at least 6 characters')
    }
    if (validator.isEmail(email) && password.length > 5) {
      navigate('/sign-in')
    }
  }

  function onEmailChange(value) {
    setEmail(value)
    setEmailError('')
  }

  function onPasswordChange(value) {
    setPassword(value)
    setPasswordError('')
  }

  return (
    <PageContainer>
      <Title name={'sign up'} />
      <InputsContainer id='sign'>
        <Input
          label={'Email'}
          error={emailError}
          value={email}
          onChange={onEmailChange}
        />
        <Input
          label={'Password'}
          error={passwordError}
          value={password}
          onChange={onPasswordChange}
        />
      </InputsContainer>
      <LinkContainer>
        Already registered? <StyledLink to='/sign-in'>Sign In</StyledLink>
      </LinkContainer>
      <Button name={'Submit'} onClick={onSubmit} />
    </PageContainer>
  )
}

export default Registration
