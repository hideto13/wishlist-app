import Button from '../../components/Button'
import Title from '../../components/Title'
import Wish from '../../components/Wish'
import PageContainer from '../../components/PageContainer'
import { WishesList } from './Wishes.styled'
function Wishes() {
  return (
    <PageContainer>
      <Title name={'All my wishes...'} />
      <WishesList>
        {Array.from(Array(8)).map((_, id) => (
          <Wish name={'name'} price={'100'} link={'https://ya.ru'} key={id} />
        ))}
      </WishesList>
      <Button name={'add one'} />
    </PageContainer>
  )
}

export default Wishes
