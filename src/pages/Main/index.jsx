import { useNavigate } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import Button from '../../components/Button'
import Title from '../../components/Title'
import PageContainer from '../../components/PageContainer'
import { MainText, MainImg, MainTextContainer } from './Main.styled'
function Main() {
  const navigate = useNavigate()

  return (
    <PageContainer>
      <Title name={<FormattedMessage id='mainTitle' />} />
      <MainTextContainer>
        <MainText>
          <span style={{ marginBottom: '20px', display: 'inline-block' }}>
            <FormattedMessage id='mainText1' />
          </span>
          <br />
          <span>
            <FormattedMessage id='mainText2' />
          </span>
        </MainText>
        <MainImg src={require('../../images/wish.jpg')} />
      </MainTextContainer>
      <Button
        name={<FormattedMessage id='mainButton' />}
        onClick={() => navigate('/sign-up')}
      />
    </PageContainer>
  )
}

export default Main
