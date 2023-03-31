import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Input from '../../components/Input'
import { InputsContainer } from './Registration.styled'

function Registration() {
  const navigate = useNavigate()

  return (
    <PageContainer>
      <Title name={'sign up'} />
      <InputsContainer>
        <Input label={'Email'} />
        <Input label={'Password'} />
      </InputsContainer>

      <Button name={'Submit'} onClick={() => navigate('/sign-in')} />
    </PageContainer>
  )
}

export default Registration
