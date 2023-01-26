export default `
  <section class="chat__body">
    <div class="chat__body__messages__display">
      {{{ messagesList }}}  
      
      {{#if chatAbsenceWarning }}
        <h1 class="chat__body__message-placeholder"> {{ chatAbsenceWarning }}</h1>
      {{/if}}
    </div>
  </section>;
`;
