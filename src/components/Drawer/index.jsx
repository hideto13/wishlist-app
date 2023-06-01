import { Header, StyledDrawer, DrawerContainer } from './Drawer.styled'

export const Drawer = ({ isOpen, onClose, children }) => {
  return (
    <StyledDrawer tabIndex='-1' isOpen={isOpen}>
      <Header>
        <img
          onClick={onClose}
          src={require('../../images/close.svg').default}
          alt='close'
          width='30px'
          height='30px'
        />
      </Header>
      <DrawerContainer>{children}</DrawerContainer>
    </StyledDrawer>
  )
}
