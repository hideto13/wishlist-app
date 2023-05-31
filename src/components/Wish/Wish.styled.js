import styled from 'styled-components'

export const WishContainer = styled.div`
  background-image: url(${require(`../../images/gift.png`)});
  background-position: center 40px;
  background-repeat: no-repeat;
  background-size: 100px;
  max-width: 282px;
  background-color: #4f273a;
  border-radius: 10px;
  overflow: hidden;
  line-height: 0;
  position: relative;
  color: rgb(235, 213, 221);
`

export const WishImg = styled.img`
  width: auto;
  height: 200px;
  object-fit: cover;
`

export const WishTextContainer = styled.div`
  width: 100%;
  min-height: 60px;

  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const WishTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const WishWrapper = styled.div`
  padding: 16px;
`

export const WishLink = styled.a`
  color: rgb(235, 213, 221);
  text-decoration: none;
`

export const WishDescription = styled.p`
  color: rgb(190, 190, 231);
  font-size: 14px;
`

export const WishName = styled.h3`
  text-transform: uppercase;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  max-width: 170px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const WishLinkWrapper = styled.p`
  margin: 8px 0;
  font-size: 16px;
  line-height: 18px;
  max-width: 150px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const WishPrice = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  margin: 0;
`
