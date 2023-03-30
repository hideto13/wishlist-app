import styled from 'styled-components'

export const WishContainer = styled.div`
  font-family: 'Inter', Arial, sans-serif;
  max-width: 282px;
  background-color: #4f273a;
  border-radius: 10px;
  overflow: hidden;
  line-height: 0;
  position: relative;
  color: rgb(235, 213, 221);
`

export const WishImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`

export const WishTextContainer = styled.div`
  width: 100%;
  padding: 16px;
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

export const WishLink = styled.a`
  color: rgb(235, 213, 221);
  text-decoration: none;
`

export const WishName = styled.h3`
  text-transform: uppercase;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
`

export const WishLinkWrapper = styled.p`
  margin: 8px 0;
  font-size: 16px;
  line-height: 18px;
`

export const WishPrice = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  margin: 0;
`
