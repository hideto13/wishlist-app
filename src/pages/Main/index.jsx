import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import { MainText, MainImg, MainTextContainer } from './Main.styled'
function Main() {
  const navigate = useNavigate()

  return (
    <PageContainer>
      <Title name={'welcome to the wishlist app!'} />
      <MainTextContainer>
        <MainText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          suscipit totam, sit labore pariatur laborum corrupti cumque quo
          repellendus illo cupiditate nesciunt explicabo incidunt sapiente omnis
          nemo eum praesentium deleniti!
        </MainText>{' '}
        <MainImg src={require('../../images/wish.jpg')} />
      </MainTextContainer>
      <Button name={'start now!'} onClick={() => navigate('/sign-up')} />
    </PageContainer>
  )
}

export default Main
