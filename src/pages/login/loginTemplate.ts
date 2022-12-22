export default `{{!< auth}}

<form class='auth__form'>
  <h2 class='auth__form__title'>Вход</h2>
  <div class='auth__form__login'>
    <label for="login">Логин</label>
    <input
      name='login'
      id='login'
      class='auth__form__login__input'
      type='text'
      value=''
      onChange='console.log(this.value)'
    />
    <span class='auth__form__login__error'>
      Error
    </span>
  </div>
  <div class='auth__form__password'>
    <label for="password">Пароль</label>
    <input
      name='password'
      id='password'
      class='auth__form__password__input'
      type='text'
      value=''
      onChange='console.log(this.value)'
    />
    <span class='auth__form__password__error'>
      Error
    </span>
  </div>
  <footer class='auth__form__buttonContainer'>
    {{>buttonAuth title="Войти"}}
    <a class='auth__noaccount' href={{route.registration}}>Нет аккаунта?</a>
  </footer>
</form>`
