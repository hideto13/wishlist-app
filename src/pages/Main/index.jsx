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
          <span style={{ marginBottom: '20px', display: 'inline-block' }}>
            Now it's easier to give gifts! Just share your wishlist with your
            friends and they can't go wrong with a gift and you still get a
            surprise!
          </span>
          <br />
          <span>
            You must register to create your own wishlist, but you can also view
            other people's wishlists without registering - just by getting a
            link to your friend's wishlist.
          </span>
        </MainText>{' '}
        <MainImg src={require('../../images/wish.jpg')} />
      </MainTextContainer>
      <Button name={'start now!'} onClick={() => navigate('/sign-up')} />
    </PageContainer>
  )
}

export default Main
