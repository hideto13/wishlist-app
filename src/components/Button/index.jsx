import { AppButton } from './Button.styled'

function Button({ name, onClick, color, type, google }) {
  return (
    <AppButton onClick={onClick} color={color} type={type} google={google}>
      {name}
      {google && (
        <img
          src={require('../../images/google.svg').default}
          width='40px'
          height='40px'
          alt='google'
        />
      )}
    </AppButton>
  )
}

export default Button
