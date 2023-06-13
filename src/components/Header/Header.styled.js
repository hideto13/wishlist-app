import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const AppHeader = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 5;
  background: rgba(16, 16, 44, 0.2);
  backdrop-filter: blur(10px);
  padding: 18px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const AppContainer = styled.div`
  max-width: 1600px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoContainer = styled(Link)`
  display: flex;
  gap: 8px;
  align-items: center;
  text-decoration: none;
`

export const LogoText = styled.p`
  margin: 0;
  font-size: 36px;
  font-style: italic;
  font-weight: 500;
  color: #4f273a;
  text-decoration: none;
`
export const StyledLink = styled(Link)`
  color: #4f273a;
  font-size: 20px;
`

export const NavContainer = styled.div`
  display: flex;
  gap: 100px;
  align-items: center;
`

export const Navigation = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`

export const NavText = styled.p`
  margin: 0;
  font-size: 20px;
  border-bottom: 1px solid rgb(79, 39, 58);
  color: rgb(79, 39, 58);
`

export const MenuImg = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`

export const SettingsImg = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  /* @media (max-width: 768px) {
    display: none;
  } */
`

export const SettingsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex-direction: column;
`
export const SettingsListItem = styled.li`
  text-decoration: none;

  margin: 0;
  color: white;
  padding: 10px 0;
  cursor: pointer;
  text-align: center;
  font-size: 16px;

  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.4px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 0;
  }
`

export const SettingsListContainer = styled.div`
  position: absolute;
  border-radius: 20px;
  z-index: 2;
  width: max-content;
  min-width: 150px;
  background: rgb(190, 190, 231);
  top: 55px;
  right: 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(73, 158, 255, 0.3);
  padding: 20px;
  flex-direction: column;
  display: flex;
  visibility: ${({ show }) => {
    if (show) {
      return 'visible'
    }
    return 'hidden'
  }};
  opacity: ${({ show }) => {
    if (show) {
      return '1'
    }
    return '0'
  }};
  transition: all 0.5s;
  @media (max-width: 768px) {
    top: 53px;
  }
`

export const SettingsTitle = styled.h3`
  margin: 0 0 8px;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  position: relative;
`
