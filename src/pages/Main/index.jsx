import Button from '../../components/Button'
import {
  MainContainer,
  MainTitle,
  MainText,
  MainImg,
  MainTextContainer,
} from './Main.styled'
function Main() {
  return (
    <MainContainer>
      <MainTitle>welcome to the wishlist app!</MainTitle>
      <MainTextContainer>
        <MainText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
          suscipit totam, sit labore pariatur laborum corrupti cumque quo
          repellendus illo cupiditate nesciunt explicabo incidunt sapiente omnis
          nemo eum praesentium deleniti!
        </MainText>{' '}
        <MainImg src={require('../../images/wish.jpg')} />
      </MainTextContainer>
      <Button />
    </MainContainer>
  )
}

export default Main
