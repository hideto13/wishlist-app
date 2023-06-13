import { FormattedMessage } from 'react-intl'
import {
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  ViberShareButton,
  ViberIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from 'react-share'
import ModalComponent from '../Modal'
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard'
import { ModalTitle } from '../Modal/Modal.styled'
import { CopyButton, CopyInput, ShareContainer } from './ShareModal.styled'

export default function ShareModal({ isOpen, onClose, link }) {
  const [linkCopied, copylLink, linkRef] = useCopyToClipboard()

  return (
    <ModalComponent isOpen={isOpen} onClose={onClose}>
      <ModalTitle>
        <FormattedMessage id='shareModalTitle' />
      </ModalTitle>
      <ShareContainer>
        <TelegramShareButton url={link}>
          <TelegramIcon size={48} round />
        </TelegramShareButton>
        <ViberShareButton url={link}>
          <ViberIcon size={48} round />
        </ViberShareButton>
        <WhatsappShareButton url={link}>
          <WhatsappIcon size={48} round />
        </WhatsappShareButton>{' '}
        <EmailShareButton url={link}>
          <EmailIcon size={48} round />
        </EmailShareButton>
        <FacebookShareButton url={link}>
          <FacebookIcon size={48} round />
        </FacebookShareButton>
        <CopyButton onClick={copylLink}>
          {linkCopied ? (
            <img
              src={require('../../images/success.svg').default}
              alt='success'
              width='24px'
              height='24px'
            />
          ) : (
            <img
              src={require('../../images/copy.svg').default}
              alt='copy'
              width='24px'
              height='24px'
            />
          )}
        </CopyButton>
        <CopyInput ref={linkRef} value={link} readOnly />
      </ShareContainer>
    </ModalComponent>
  )
}
