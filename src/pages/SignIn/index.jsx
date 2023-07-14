import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useGoogleLogin } from '@react-oauth/google'
import validator from 'validator'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Input from '../../components/Input'
import { UserContext } from '../../contexts/UserContext'
import { login, getGoogleInfo } from '../../api'
import {
  InputsContainer,
  LinkContainer,
  StyledLink,
  FormContainer,
  ButtonContainer,
} from './SignIn.styled'

function SignIn() {
  const navigate = useNavigate()
  const { checkUser } = useContext(UserContext)

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')

  const googleLogin = useGoogleLogin({
    onSuccess: codeResponse => {
      getGoogleInfo(codeResponse.access_token).then(info => {
        login(info.email, info.id)
          .then(res => {
            localStorage.setItem('Token', res.token)
            checkUser()
            navigate('/wishes')
          })
          .catch(e => {
            console.log(e)
            setPasswordError(<FormattedMessage id='defaultError' />)
          })
      })
    },
  })

  function onSubmit(e) {
    e.preventDefault()

    if (!validator.isEmail(email)) {
      setEmailError(<FormattedMessage id='incorrectEmailError' />)
    }
    if (password.length < 6) {
      setPasswordError(<FormattedMessage id='shortPasswordError' />)
    }
    if (validator.isEmail(email) && password.length > 5) {
      login(email, password)
        .then(res => {
          localStorage.setItem('Token', res.token)
          checkUser()
          navigate('/wishes')
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
      <ButtonContainer>
        <Button
          onClick={() => googleLogin()}
          name={<FormattedMessage id='signinGoogle' />}
          color={'white'}
          google
        />
      </ButtonContainer>
      <FormContainer onSubmit={onSubmit}>
        <Title name={<FormattedMessage id='signinTitle' />} />
        <InputsContainer>
          <Input
            label={'Email'}
            error={emailError}
            value={email}
            onChange={onEmailChange}
          />
          <Input
            label={<FormattedMessage id='signinPassword' />}
            error={passwordError}
            value={password}
            onChange={onPasswordChange}
            pass
          />
        </InputsContainer>
        <LinkContainer>
          <FormattedMessage id='signinText' />{' '}
          <StyledLink to='/sign-up'>
            <FormattedMessage id='signupTitle' />
          </StyledLink>
        </LinkContainer>
        <Button name={<FormattedMessage id='signinTitle' />} />
      </FormContainer>
    </PageContainer>
  )
}

export default SignIn
