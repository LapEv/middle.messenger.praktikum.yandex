export default `
    <div class="modal__container">
      {{{title}}}
      <section class="modal__choose">
        <label for="modalInputFile" class="modal__choose__text">Название</label>
        {{{ chatTitleInput }}}
      </section>
      
      <section class="modal__button__container">
        {{{ submitButton }}}
      </section>

      <section class="api-response-status">
        {{#if apiResponseSuccess}}
          <span class="api-success"> {{apiResponseSuccess}} </span>
        {{/if}}
        {{#if apiResponseError}}
          <span class="api-error"> {{apiResponseError}} </span>
        {{/if}}
      </section>
    </div>
`;
