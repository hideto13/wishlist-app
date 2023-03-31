import { AppButton } from './Button.styled'

function Button({ name, onClick }) {
  return <AppButton onClick={onClick}>{name}</AppButton>
}

export default Button
