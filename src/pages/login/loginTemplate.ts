import loginData from './loginData';

export default `
<main class='auth__container'>
  <form class='auth__form'>
    <h2 class='auth__form__title'>${loginData.pageTitle}</h2>
    <div class="auth__form__login">
      {{{ loginField }}}
      <span class='auth__form__login__error'>
        {{{ loginError }}}
      </span>
    </div>
    <div class="auth__form__password">
      {{{ passwordField }}}
      <span class='auth__form__password__error'>
        {{{ passwordError }}}
      </span>
    </div>
    <div class='auth__form__buttonContainer'>
      {{{ button }}}
      {{{ registration }}}
    </div>
  </form>
  <footer class='auth__error__container'>
    {{{error404}}}
    {{{error505}}}
  </footer>
</main>`;
