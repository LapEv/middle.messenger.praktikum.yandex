export const chatTemplate = `
<main class='chat__container'>
  <div class='chat__list'>
    {{{profileLink}}}
    {{{inputFind}}}
    {{{ chats }}}
  </div>
  <div class='chat__body'>
    <div class='chat__body__title'>
      <div class='chat__body__title__circle'></div>
      {{{chatWith}}}
      {{{menuImage}}}
    </div>
    <div class='chat__body__line'></div>
      {{{chatDate}}}
    <div class='chat__body__message__container'>
      {{{chatMessage1}}}
      {{{chatTime1}}}
    </div>
    {{{imagePhoto}}}
    <div class='chat__body__you__container'>
      {{{chatMessage2}}}
      {{{chatTime2}}}
    </div>
    <footer class='chat__body__footer'>
      <div class='chat__body__line'></div>
      <div class='chat__body__footer__container'>
        {{{attachImage}}}
        {{{inputMessage}}}
        {{{sendImage}}}
      </div>
    </footer>
  </div>
</main>
`;
