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
import { register, login, getGoogleInfo } from '../../api'
import {
  InputsContainer,
  StyledLink,
  LinkContainer,
  FormContainer,
  ButtonContainer,
} from './Registration.styled'

function Registration() {
  const navigate = useNavigate()
  const { checkUser } = useContext(UserContext)

  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [emailError, setEmailError] = useState('')

  const googleRegister = useGoogleLogin({
    onSuccess: codeResponse => {
      getGoogleInfo(codeResponse.access_token).then(info => {
        register(info.email, info.id)
          .then(() => {
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
          .catch(e => {
            console.error(e.status)
            if (e.status === 409) {
              setPasswordError(<FormattedMessage id='existError' />)
              return
            }
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
      register(email, password)
        .then(res => {
          navigate('/sign-in')
        })
        .catch(e => {
          console.error(e.status)
          if (e.status === 409) {
            setPasswordError(<FormattedMessage id='existError' />)
            return
          }
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
          onClick={() => googleRegister()}
          name={<FormattedMessage id='signupGoogle' />}
          color={'white'}
          google
        />
      </ButtonContainer>
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
