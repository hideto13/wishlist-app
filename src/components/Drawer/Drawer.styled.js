import styled from 'styled-components'

export const Header = styled.div`
  border-bottom: 1px solid rgb(79, 39, 58);
  padding: 12px;
  display: flex;
  justify-content: flex-end;
`

export const StyledDrawer = styled.div`
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 1200;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;

  background-color: #ffffff;
  background: rgb(227, 169, 190);
  width: 100%;
  flex-shrink: 0;

  transition: 0.6s cubic-bezier(0.4, 0, 0.2, 1) all;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0px)' : 'translateX(770px)'};
`

export const DrawerContainer = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin-top: 40px;
`
