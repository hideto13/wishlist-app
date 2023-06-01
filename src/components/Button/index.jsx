import { AppButton } from './Button.styled'

function Button({ name, onClick, color, type }) {
  return (
    <AppButton onClick={onClick} color={color} type={type}>
      {name}
    </AppButton>
  )
}

export default Button
