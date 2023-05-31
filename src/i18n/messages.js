import { LOCALES } from './locales'

export const messages = {
  [LOCALES.ENGLISH]: {
    currencySymbol: '$',
    // header
    headerButton: 'Sign In',
    // main page
    mainTitle: 'WELCOME TO THE WISHLIST APP!',
    mainText1:
      "Now it's easier to give gifts! Just share your wishlist with your friends and they can't go wrong with a gift and you still get a surprise!",
    mainText2:
      "You must register to create your own wishlist, but you can also view other people's wishlists without registering - just by getting a link to your friend's wishlist.",
    mainButton: 'start now!',
    // myWishes page
    myWishesTitle: 'ALL MY WISHES...',
    myWishesErrorTitle: 'Please log in',
    myWishesButton: 'add one',
    // wishes page
    wishesTitle: 'Please, gift me...',
    wishesErrorTitle: 'No wishes yet',
    // add wish form
    formTitle: 'Add new wish',
    formName: 'Name',
    formPrice: 'Price',
    formDescription: 'Description',
    formImage: 'Image link',
    formLink: 'Wish link',
    formButton: 'add',
    formNameError: 'Name is required',
    formLinkError: 'Incorrect url',
    //signup
    signupTitle: 'Sign Up',
    signupPassword: 'Password',
    signupText: 'Already registered?',
    signupButton: 'Submit',
    //signin
    signinTitle: 'Sign In',
    signinPassword: 'Password',
    signinText: 'Missing account?',
    // errors
    defaultError: 'Something went wrong',
    shortPasswordError: 'The password should be at least 6 characters',
    incorrectEmailError: 'Incorrect email address',
  },
  [LOCALES.RUSSIAN]: {
    currencySymbol: '₽',
    // header
    headerButton: 'Войти',
    // main page
    mainTitle: 'Добро пожаловать в приложение WishList!',
    mainText1:
      'Теперь дарить подарки стало проще! Просто поделитесь своим списком желаний с друзьями, и они не ошибутся с подарком, а вы все равно получите сюрприз!',
    mainText2:
      'Вы должны зарегистрироваться, чтобы создать свой собственный список желаний, но вы также можете просматривать списки желаний других людей без регистрации - просто получив ссылку на список желаний вашего друга.',
    mainButton: 'Начать сейчас!',
    // myWishes page
    myWishesTitle: 'Мои желания...',
    myWishesErrorTitle: 'Зарегистрируйтесь, чтобы создать свой лист желаний',
    myWishesButton: 'Добавить ещё',
    // wishes page
    wishesTitle: 'Пожалуйста, подари мне...',
    wishesErrorTitle: 'Список желаний пуст',
    // add wish form
    formTitle: 'Добавить новое желание',
    formName: 'Название',
    formPrice: 'Цена',
    formDescription: 'Описание',
    formImage: 'Ссылка на изображение',
    formLink: 'Ссылка на товар',
    formButton: 'Добавить',
    formNameError: "Поле 'Название' обязательно",
    formLinkError: 'Некорректная ссылка',
    //signup
    signupTitle: 'Зарегистрироваться',
    signupPassword: 'Пароль',
    signupText: 'Уже зарегестрированы?',
    signupButton: 'Отправить',
    //signin
    signinTitle: 'Войти',
    signinPassword: 'Пароль',
    signinText: 'Забыли пароль?',
    // errors
    defaultError: 'Что-то пошло не так :(',
    shortPasswordError: 'Пароль должен быть не короче 6 символов',
    incorrectEmailError: 'Некорректный email',
  },
}
