import styled from 'styled-components'

export const MainContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  box-sizing: border-box;
  padding: 100px 50px 150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const MainText = styled.p`
  max-width: 500px;
  line-height: 38px;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const MainImg = styled.img`
  width: 400px;
  height: 100%;

  border-radius: 5px;
  @media (max-width: 1023px) {
    width: 350px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`

export const MainTextContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-top: 50px;
  margin-bottom: 110px;
  @media (max-width: 1023px) {
    margin-bottom: 70px;
  }
  @media (max-width: 767px) {
    margin-bottom: 50px;
    margin-top: 10px;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
`
