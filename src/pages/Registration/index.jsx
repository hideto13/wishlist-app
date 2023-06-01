import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import validator from 'validator'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Input from '../../components/Input'
import { register } from '../../api'
import {
  InputsContainer,
  StyledLink,
  LinkContainer,
  FormContainer,
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
      setEmailError(<FormattedMessage id='incorrectEmailError' />)
    }
    if (password.length < 6) {
      setPasswordError(<FormattedMessage id='shortPasswordError' />)
    }
    if (validator.isEmail(email) && password.length > 5) {
      register(email, password)
        .then(res => {
          navigate('/sign-in')
        })
        .catch(e => {
          console.log(e)
          setPasswordError(<FormattedMessage id='defaultError' />)
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
      <FormContainer onSubmit={onSubmit}>
        <Title name={<FormattedMessage id='signupTitle' />} />
        <InputsContainer id='sign'>
          <Input
            label={'Email'}
            error={emailError}
            value={email}
            onChange={onEmailChange}
          />
          <Input
            label={<FormattedMessage id='signupPassword' />}
            error={passwordError}
            value={password}
            onChange={onPasswordChange}
            pass
          />
        </InputsContainer>
        <LinkContainer>
          <FormattedMessage id='signupText' />{' '}
          <StyledLink to='/sign-in'>
            <FormattedMessage id='signinTitle' />
          </StyledLink>
        </LinkContainer>
        <Button name={<FormattedMessage id='signupButton' />} />
      </FormContainer>
    </PageContainer>
  )
}

export default Registration
