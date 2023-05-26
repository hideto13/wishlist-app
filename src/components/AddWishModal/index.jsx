import ModalComponent from '../Modal'
import Button from '../Button'
import { ModalInput, ModalTitle, ModalLabel } from '../Modal/Modal.styled'
import { ButtonContainer } from './AddWishModal.styled'

export default function AddWishModal({ isOpen, onClose }) {
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <ModalTitle>Add new wish</ModalTitle>
      <ModalLabel>Name</ModalLabel>
      <ModalInput />
      <ModalLabel>Price</ModalLabel>
      <ModalInput />
      <ModalLabel>Description</ModalLabel>
      <ModalInput />
      <ModalLabel>Image link</ModalLabel>
      <ModalInput />
      <ModalLabel>Wish link</ModalLabel>
      <ModalInput />
      <ButtonContainer>
        <Button name={'Add'} color='rgba(16, 16, 44, 0.2)' />
      </ButtonContainer>
    </ModalComponent>
  )
}
