import { useState, useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import validator from 'validator'
import ModalComponent from '../Modal'
import Button from '../Button'
import { addWish } from '../../api'
import { UserContext } from '../../contexts/UserContext'
import { ModalInput, ModalTitle, ModalLabel } from '../Modal/Modal.styled'
import { ButtonContainer, ErrorText } from './AddWishModal.styled'

export default function AddWishModal({ isOpen, onClose }) {
  const initialNewWish = {
    name: '',
    description: '',
    link: '',
    image: '',
    price: '',
  }
  const { token, getWishes } = useContext(UserContext)
  const [newWish, setNewWish] = useState(initialNewWish)
  const [error, setError] = useState('')

  const handleChangeName = e => {
    setNewWish({ ...newWish, name: e.target.value })
    setError('')
  }
  const handleChangePrice = e =>
    setNewWish({ ...newWish, price: e.target.value })
  const handleChangeDescription = e =>
    setNewWish({ ...newWish, description: e.target.value })
  const handleChangeImage = e =>
    setNewWish({ ...newWish, image: e.target.value })
  const handleChangeLink = e => setNewWish({ ...newWish, link: e.target.value })

  function addNewWish() {
    if (!newWish.name) {
      setError(<FormattedMessage id='formNameError' />)
    } else if (
      (newWish.image && !validator.isURL(newWish.image)) ||
      (newWish.link && !validator.isURL(newWish.link))
    ) {
      setError(<FormattedMessage id='formLinkError' />)
    } else {
      addWish(token, newWish)
        .then(res => {
          onClose()
          setNewWish(initialNewWish)
          getWishes()
        })
        .catch(e => {
          console.log(e)
          setError(<FormattedMessage id='defaultError' />)
        })
    }
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
      <ModalInput
        value={newWish.price}
        onChange={handleChangePrice}
        type='number'
      />
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
        <ErrorText>{error}</ErrorText>
        <Button
          name={<FormattedMessage id='formButton' />}
          color='rgba(16, 16, 44, 0.2)'
          onClick={addNewWish}
        />
      </ButtonContainer>
    </ModalComponent>
  )
}
