import { AppButton } from './Button.styled'

function Button({ name, onClick, color }) {
  return (
    <AppButton onClick={onClick} color={color}>
      {name}
    </AppButton>
  )
}

export default Button
