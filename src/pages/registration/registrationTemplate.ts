import regData from './registrationData';

export default `
<main class='auth__container'>
  <form class='auth__registration_form'>
    <h2 class='auth__registration_form__title'>${regData.pageTitle}</h2>
    <div class='auth__registration_form__email'>
      {{{ emailField }}}
      <span class='auth__registration_form__email__error'>
        {{{ emailError }}}
      </span>
    </div>
    <div class='auth__registration_form__login'>
      {{{ loginField }}}
      <span class='auth__registration_form__login__error'>
        {{{ loginError }}}
      </span>
    </div>
    <div class='auth__registration_form__first_name'>
      {{{ first_nameField }}}
      <span class='auth__registration_form__first_name__error'>
        {{{ first_nameError }}}
      </span>
    </div>
    <div class='auth__registration_form__second_name'>
      {{{ second_nameField }}}
      <span class='auth__registration_form__second_name__error'>
        {{{ second_nameError }}}
      </span>
    </div>
    <div class='auth__registration_form__phone'>
      {{{ phoneField }}}
      <span class='auth__registration_form__phone__error'>
        {{{ phoneError }}}
      </span>
    </div>
    <div class='auth__registration_form__password'>
      {{{ passwordField }}}
      <span class='auth__registration_form__password__error'>
        {{{ passwordError }}}
      </span>
    </div>
    <div class='auth__registration_form__passwordCheck'>
      {{{ passwordCheckField }}}
      <span class='auth__registration_form__passwordCheck__error'>
        {{{ passwordCheckError }}}
      </span>
    </div>
    <footer class='auth__registration_form__buttonContainer'>
      {{{ button }}}
      {{{ loginLink }}}
    </footer>
  </form>
</main>`;
