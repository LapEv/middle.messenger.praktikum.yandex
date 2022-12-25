export const profileTemplate = `
<main class='profile'>
  {{{modal}}}
  {{{arrowBackImage}}}
  <div class='profile__container'>
    <div class='profile__avatar'>
      {{{avatarImage}}}
      <label for='avatar' style='display: none'></label>
      {{{inputAvatarImage}}}
      {{{changeAvatar}}}
    </div>
    {{{username}}}
    <div class='profile__data__container'>
      {{{emailField}}}
      <span class='profile__error'>
        {{{ emailError }}}
      </span>
      {{{loginField}}}
      <span class='profile__error'>
        {{{ loginError }}}
      </span>
      {{{first_nameField}}}
      <span class='profile__error'>
        {{{ first_nameError }}}
      </span>
      {{{second_nameField}}}
      <span class='profile__error'>
        {{{ second_nameError }}}
      </span>
      {{{display_nameField}}}
      <span class='profile__error'>
        {{{ display_nameError }}}
      </span>
      {{{phoneField}}}
      <span class='profile__error'>
        {{{ phoneError }}}
      </span>
    </div>
    <div class='profile__button__container'>
      {{{changeDataLink}}}
      <div class='profile__line2'></div>
      {{{changePasswordLink}}}
      <div class='profile__line2'></div>
      {{{exitLink}}}
   </div>
</main>
`;

export const imageBackTemplate = `
  {{{arrowBackImage}}}
`;
