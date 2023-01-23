export default `
      <main class="profile">
        {{{arrowBackImage}}}
        <div class='profile__container'>
          <div class="profile__avatar">
            {{{ avatarImage }}}
            <div class="profile__avatar__change">
              {{{ avatarInput }}}
            </div>
            {{{ submitSection }}}
          </div>
          {{{ profileDataForm }}}
          <div class='profile__button__container'>
            {{{changeDataButton}}}
            <div class='profile__line2'></div>
            {{{exitLink}}}
          </div>
       </div>
      </main>
`;

// <div class='profile__line2'></div>
// {{{changePasswordLink}}}
// <div class='profile__line2'></div>
// {{{exitLink}}}
