export default `
  <section class="chat__body__footer">
    <div class="chat__body__line"></div>
    <div class="chat__body__footer__container">
      {{{ attachmentButton }}}
      <div class="chat__body__footer__inputContainer">
        <label for="message" style="width: 0"></label>
        {{{ messageInput }}}
      </div>
      {{{ sendMessageButton }}}
    </div>
  </section>
`;
