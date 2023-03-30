import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import Input from '../../components/Input'
import { InputsContainer } from './Registration.styled'

function Registration() {
  return (
    <PageContainer>
      <Title name={'sign up'} />
      <InputsContainer>
        <Input label={'Email'} />
        <Input label={'Password'} />
      </InputsContainer>

      <Button name={'Submit'} />
    </PageContainer>
  )
}

export default Registration
