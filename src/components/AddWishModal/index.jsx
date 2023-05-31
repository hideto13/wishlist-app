import { useState, useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import ModalComponent from '../Modal'
import Button from '../Button'
import { addWish } from '../../api'
import { UserContext } from '../../contexts/UserContext'
import { ModalInput, ModalTitle, ModalLabel } from '../Modal/Modal.styled'
import { ButtonContainer } from './AddWishModal.styled'

export default function AddWishModal({ isOpen, onClose }) {
  const initialNewWish = {
    name: '',
    description: '',
    link: '',
    image: '',
    price: '',
  }
  const { token } = useContext(UserContext)
  const [newWish, setNewWish] = useState(initialNewWish)

  const handleChangeName = e => setNewWish({ ...newWish, name: e.target.value })
  const handleChangePrice = e =>
    setNewWish({ ...newWish, price: e.target.value })
  const handleChangeDescription = e =>
    setNewWish({ ...newWish, description: e.target.value })
  const handleChangeImage = e =>
    setNewWish({ ...newWish, image: e.target.value })
  const handleChangeLink = e => setNewWish({ ...newWish, link: e.target.value })

  function addNewWish() {
    addWish(token, newWish)
      .then(res => {
        onClose()
        setNewWish(initialNewWish)
      })
      .catch(e => console.log(e))
  }

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <ModalTitle>
        <FormattedMessage id='formTitle' />
      </ModalTitle>
      <ModalLabel>
        <FormattedMessage id='formName' />*
      </ModalLabel>
      <ModalInput value={newWish.name} onChange={handleChangeName} />
      <ModalLabel>
        <FormattedMessage id='formPrice' />
      </ModalLabel>
      <ModalInput value={newWish.price} onChange={handleChangePrice} />
      <ModalLabel>
        <FormattedMessage id='formDescription' />
      </ModalLabel>
      <ModalInput
        value={newWish.description}
        onChange={handleChangeDescription}
      />
      <ModalLabel>
        <FormattedMessage id='formImage' />
      </ModalLabel>
      <ModalInput value={newWish.image} onChange={handleChangeImage} />
      <ModalLabel>
        <FormattedMessage id='formLink' />
      </ModalLabel>
      <ModalInput value={newWish.link} onChange={handleChangeLink} />
      <ButtonContainer>
        <Button
          name={<FormattedMessage id='formButton' />}
          color='rgba(16, 16, 44, 0.2)'
          onClick={addNewWish}
        />
      </ButtonContainer>
    </ModalComponent>
  )
}
