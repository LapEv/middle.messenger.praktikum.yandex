export default `
  <li class="chat__list__message__container">
    <div class="chat__list__message__circle">
      {{{ avatarImage }}}
    </div>
    <div class="chat__list__message__text">
      {{{ chatTitle }}}
      {{{ chatText }}}
      {{{ chatTime }}}
    </div>
    <div class="chat__list__message__unread">
      {{{ unreadMessagesCount }}}
    </div>
  </li>
`;
