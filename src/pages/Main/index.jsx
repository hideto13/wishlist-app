import Button from '../../components/Button'
import Title from '../../components/Title'
import {
  MainContainer,
  MainText,
  MainImg,
  MainTextContainer,
} from './Main.styled'
function Main() {
  return (
    <MainContainer>
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
      <Button name={'start now!'} />
    </MainContainer>
  )
}

export default Main
