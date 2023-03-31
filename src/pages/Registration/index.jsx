import { useNavigate } from 'react-router-dom'
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

  return (
    <PageContainer>
      <Title name={'sign up'} />
      <InputsContainer>
        <Input label={'Email'} />
        <Input label={'Password'} />
      </InputsContainer>
      <LinkContainer>
        Already registered? <StyledLink to='/sign-in'>Sign In</StyledLink>
      </LinkContainer>
      <Button name={'Submit'} onClick={() => navigate('/sign-in')} />
    </PageContainer>
  )
}

export default Registration
