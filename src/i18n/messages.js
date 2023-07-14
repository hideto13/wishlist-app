import { LOCALES } from './locales'

export const messages = {
  [LOCALES.ENGLISH]: {
    currencySymbol: '$',
    localeTitle: 'Select Language',
    shareModalTitle: 'Share',
    // header
    headerButton: 'Sign In',
    headerNavAbout: 'About',
    headerNavWishes: 'My Wishes',
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
    editFormTitle: 'Edit wish',
    formName: 'Name',
    formPrice: 'Price',
    formPricePlaceholder: '(in dollars)',
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
    signupGoogle: 'Sign Up with Google 🚀 ',
    //signin
    signinTitle: 'Sign In',
    signinPassword: 'Password',
    signinText: 'Missing account?',
    signinGoogle: 'Sign In with Google 🚀 ',
    // errors
    defaultError: 'Something went wrong',
    existError: 'User already exist',
    shortPasswordError: 'The password should be at least 6 characters',
    incorrectEmailError: 'Incorrect email address',
    emptyFormError: 'At least one field must be filled',
  },
  [LOCALES.RUSSIAN]: {
    currencySymbol: '₽',
    localeTitle: 'Выберите язык',
    shareModalTitle: 'Поделится',
    // header
    headerButton: 'Войти',
    headerNavAbout: 'О проекте',
    headerNavWishes: 'Мои желания',
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
    myWishesButton: 'Добавить',
    // wishes page
    wishesTitle: 'Пожалуйста, подари мне...',
    wishesErrorTitle: 'Список желаний пуст',
    // add wish form
    formTitle: 'Добавить новое желание',
    editFormTitle: 'Редактировать',
    formName: 'Название',
    formPrice: 'Цена',
    formPricePlaceholder: '(в рублях)',
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
    signupGoogle: 'Зарегистрироваться с Google 🚀 ',
    //signin
    signinTitle: 'Войти',
    signinPassword: 'Пароль',
    signinText: 'Забыли пароль?',
    signinGoogle: 'Войти с Google 🚀 ',
    // errors
    defaultError: 'Что-то пошло не так :(',
    existError: 'Пользователь уже зарегистрирован',
    shortPasswordError: 'Пароль должен быть не короче 6 символов',
    incorrectEmailError: 'Некорректный email',
    emptyFormError: 'Должно быть заполнено хотя бы одно поле',
  },
}
