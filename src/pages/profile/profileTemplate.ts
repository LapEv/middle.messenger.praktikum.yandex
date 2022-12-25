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
      {{{loginField}}}
      {{{first_nameField}}}
      {{{second_nameField}}}
      {{{display_nameField}}}
      {{{phoneField}}}
    </div>
    {{{changeDataLink}}}
    <div class='profile__line2'></div>
    {{{changePasswordLink}}}
    <div class='profile__line2'></div>
    {{{exitLink}}}
</main>
`;

export const imageBackTemplate = `
  {{{arrowBackImage}}}
`;
