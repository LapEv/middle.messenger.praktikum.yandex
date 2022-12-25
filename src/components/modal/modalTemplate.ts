export const modalTemplate = `
<div class='modal' style="display: none">
  <div class='modal__background'></div>
  <div class='modal__container'>
    {{{modalTitle}}}
    {{{modalInputFile}}}
    <div class='modal__button__container'>
       {{{modalButton}}} 
    </div>
    {{{modalError}}}
  </div>
</div>
`;
