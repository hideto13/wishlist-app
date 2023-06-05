import { useState, useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import validator from 'validator'
import ModalComponent from '../Modal'
import Button from '../Button'
import { editWish } from '../../api'
import { UserContext } from '../../contexts/UserContext'
import { ModalInput, ModalTitle, ModalLabel } from '../Modal/Modal.styled'
import { ButtonContainer, ErrorText } from './EditWishModal.styled'

export default function EditWishModal({ id, isOpen, onClose }) {
  const initialWishProps = {
    name: '',
    description: '',
    link: '',
    image: '',
    price: '',
  }
  const { token, getWishes } = useContext(UserContext)
  const [newWishProps, setNewWishProps] = useState(initialWishProps)
  const [error, setError] = useState('')

  const handleChangeName = e => {
    setNewWishProps({ ...newWishProps, name: e.target.value })
    setError('')
  }
  const handleChangePrice = e =>
    setNewWishProps({ ...newWishProps, price: e.target.value })
  const handleChangeDescription = e =>
    setNewWishProps({ ...newWishProps, description: e.target.value })
  const handleChangeImage = e =>
    setNewWishProps({ ...newWishProps, image: e.target.value })
  const handleChangeLink = e =>
    setNewWishProps({ ...newWishProps, link: e.target.value })

  function isNewProps() {
    for (let key in newWishProps) {
      if (newWishProps[key]) {
        console.log(newWishProps[key])
        return true
      }
    }
    return false
  }

  function editWishProps(e) {
    e.preventDefault()
    if (!isNewProps()) {
      setError(<FormattedMessage id='emptyFormError' />)
    } else if (
      (newWishProps.image && !validator.isURL(newWishProps.image)) ||
      (newWishProps.link && !validator.isURL(newWishProps.link))
    ) {
      setError(<FormattedMessage id='formLinkError' />)
    } else {
      editWish(token, id, newWishProps)
        .then(res => {
          onClose()
          setNewWishProps(initialWishProps)
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
      <form onSubmit={editWishProps}>
        <ModalTitle>
          <FormattedMessage id='editFormTitle' />
        </ModalTitle>
        <ModalLabel>
          <FormattedMessage id='formName' />*
        </ModalLabel>
        <ModalInput value={newWishProps.name} onChange={handleChangeName} />
        <ModalLabel>
          <FormattedMessage id='formPrice' />
        </ModalLabel>
        <ModalInput
          value={newWishProps.price}
          onChange={handleChangePrice}
          type='number'
        />
        <ModalLabel>
          <FormattedMessage id='formDescription' />
        </ModalLabel>
        <ModalInput
          value={newWishProps.description}
          onChange={handleChangeDescription}
        />
        <ModalLabel>
          <FormattedMessage id='formImage' />
        </ModalLabel>
        <ModalInput value={newWishProps.image} onChange={handleChangeImage} />
        <ModalLabel>
          <FormattedMessage id='formLink' />
        </ModalLabel>
        <ModalInput value={newWishProps.link} onChange={handleChangeLink} />
        <ButtonContainer>
          <ErrorText>{error}</ErrorText>
          <Button
            name={<FormattedMessage id='signupButton' />}
            color='rgba(16, 16, 44, 0.2)'
            type='submit'
          />
        </ButtonContainer>
      </form>
    </ModalComponent>
  )
}
