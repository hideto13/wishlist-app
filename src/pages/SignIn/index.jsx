import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Input from '../../components/Input'
import { InputsContainer } from './SignIn.styled'

function SignIn() {
  const navigate = useNavigate()

  return (
    <PageContainer>
      <Title name={'sign in'} />
      <InputsContainer>
        <Input label={'Email'} />
        <Input label={'Password'} />
      </InputsContainer>
      <Button name={'Sign in'} onClick={() => navigate('/wishes')} />
    </PageContainer>
  )
}

export default SignIn
