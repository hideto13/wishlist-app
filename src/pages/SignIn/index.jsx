import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Input from '../../components/Input'
import { UserContext } from '../../contexts/UserContext'
import { login } from '../../api'
import { InputsContainer, LinkContainer, StyledLink } from './SignIn.styled'

function SignIn() {
  const navigate = useNavigate()
  const { getToken } = useContext(UserContext)

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
      login(email, password)
        .then(res => {
          localStorage.setItem('Token', res.token)
          getToken()
          navigate('/wishes')
        })
        .catch(e => {
          console.log(e)
        })
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
      <Title name={'sign in'} />
      <InputsContainer>
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
        Missing account? <StyledLink to='/sign-up'>Sign Up</StyledLink>
      </LinkContainer>
      <Button name={'Sign in'} onClick={onSubmit} />
    </PageContainer>
  )
}

export default SignIn
