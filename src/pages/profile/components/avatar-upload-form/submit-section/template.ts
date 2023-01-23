export default `
  <div class="profile__avatar__saveAvatar">
    {{{ submitButton }}}
    {{#if uploadingStatus }}
      <div  class="profile__avatar__info">
        <span>{{ uploadingStatus }}</span>
      </div>
    {{/if}}
  </div>
`;
