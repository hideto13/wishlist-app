import styled from 'styled-components'

export const WishContainer = styled.div`
  background-image: url(${require(`../../images/gift.png`)});
  background-position: center 50px;
  background-repeat: no-repeat;
  background-size: 100px;
  max-width: 300px;
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
  cursor: pointer;
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
  line-height: normal;
`

export const WishName = styled.h3`
  text-transform: uppercase;
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const WishLinkWrapper = styled.p`
  margin: 8px 0;
  font-size: 16px;
  line-height: 18px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

export const WishPrice = styled.p`
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  margin: 0;
  text-align: end;
  position: relative;
  top: -5px;
  color: rgb(227, 169, 190);
`

export const DeleteButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 150ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`
export const EditButton = styled.button`
  position: absolute;
  top: 15px;
  left: 15px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: all 150ms ease-in-out;

  &:hover {
    opacity: 0.7;
  }
`
