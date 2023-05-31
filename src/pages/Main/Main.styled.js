import styled from 'styled-components'

export const MainText = styled.p`
  max-width: 500px;
  line-height: 38px;
  margin: 0;
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
  margin-top: 20px;
  margin-bottom: 90px;
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
