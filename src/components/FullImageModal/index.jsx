import React, { useEffect, useCallback, useRef } from 'react'
import { Modal } from '../Modal/Modal.styled'
import { Image, ImageContainer, ImageCaption } from './FullImageModal.styled'

export default function FullImageModal({ isOpen, onClose, image, name }) {
  const modal = useRef(null)

  const handleOverlayClose = useCallback(event => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }, [])

  useEffect(() => {
    if (modal.current) {
      modal.current.addEventListener('click', handleOverlayClose)
    }
    return () => {
      if (modal.current) {
        modal.current.removeEventListener('click', handleOverlayClose)
      }
    }
  }, [handleOverlayClose])

  return (
    <Modal isOpen={isOpen} ref={modal}>
      <ImageContainer>
        <Image src={image} />
        <ImageCaption>{name}</ImageCaption>
      </ImageContainer>
    </Modal>
  )
}
