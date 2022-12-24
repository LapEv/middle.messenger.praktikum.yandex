import { profileData } from '../profileData';

export const profileTemplate = `
<main class='profile'>
  {{{arrowBackImage}}}
  <div class='profile__container'>
    <div class='profile__avatar'>
      {{{avatarImage}}}
      <label for='avatar' style='display: none'></label>
      <input
        name='avatar'
        type='file'
        id='avatar'
        style='display: none'
      />
      <span class='profile__avatar__change'>${profileData.changeAvatar}</span>
    </div>
    {{{username}}}
    <div class='profile__data__container'>
      {{{oldPasswordField}}}
      {{{newPasswordField}}}
      {{{newPasswordCheckField}}}
    </div>
    <div class="profile__button">
      {{{button}}}
    </div>
</main>
`;

export const imageBackTemplate = `
  {{{arrowBackImage}}}
`;
