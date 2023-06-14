import { useState, useContext } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import validator from 'validator'
import ModalComponent from '../Modal'
import Button from '../Button'
import { addWish } from '../../api'
import { UserContext } from '../../contexts/UserContext'
import { ModalInput, ModalTitle, ModalLabel } from '../Modal/Modal.styled'
import {
  ButtonContainer,
  ErrorText,
  ImageToogle,
  UploadInput,
} from './AddWishModal.styled'

export default function AddWishModal({ isOpen, onClose }) {
  const intl = useIntl()
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
  const [selectedImage, setSelectedImage] = useState(null)
  const [uploadImage, setUploadImage] = useState(false)

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

  function addNewWish(e) {
    e.preventDefault()
    if (!newWish.name) {
      setError(<FormattedMessage id='formNameError' />)
    } else if (
      (newWish.image && !validator.isURL(newWish.image)) ||
      (newWish.link && !validator.isURL(newWish.link))
    ) {
      setError(<FormattedMessage id='formLinkError' />)
    } else {
      addWish(token, newWish, selectedImage)
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
  console.log(selectedImage)
  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <form onSubmit={addNewWish}>
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
          placeholder={intl.formatMessage({ id: 'formPricePlaceholder' })}
        />
        <ModalLabel>
          <FormattedMessage id='formDescription' />
        </ModalLabel>
        <ModalInput
          value={newWish.description}
          onChange={handleChangeDescription}
        />
        <ImageToogle>
          <ModalLabel onClick={() => setUploadImage(false)}>
            <FormattedMessage id='formImage' />
          </ModalLabel>
          <span>/</span>
          <ModalLabel onClick={() => setUploadImage(true)}>
            <FormattedMessage id='formImage' />
          </ModalLabel>
        </ImageToogle>
        {uploadImage ? (
          <>
            {selectedImage ? (
              <div>
                <img
                  alt='not found'
                  width={'60px'}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                <button onClick={() => setSelectedImage(null)}>Remove</button>
              </div>
            ) : (
              <UploadInput
                type='file'
                name='myImage'
                onChange={event => {
                  console.log(event.target.files[0])
                  setSelectedImage(event.target.files[0])
                }}
              />
            )}
          </>
        ) : (
          <ModalInput value={newWish.image} onChange={handleChangeImage} />
        )}
        <ModalLabel>
          <FormattedMessage id='formLink' />
        </ModalLabel>
        <ModalInput value={newWish.link} onChange={handleChangeLink} />
        <ButtonContainer>
          <ErrorText>{error}</ErrorText>
          <Button
            name={<FormattedMessage id='formButton' />}
            color='rgba(16, 16, 44, 0.2)'
            type='submit'
          />
        </ButtonContainer>
      </form>
    </ModalComponent>
  )
}
