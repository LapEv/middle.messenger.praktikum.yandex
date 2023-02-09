import getComponentTemplate from "utils/components/templateGenerator";

export default function getInputFormTemplate(
  enumFormFieldsNames: Record<string, string>
): string {
  const tag = "form";

  let content = `
    {{#if formTitle}} 
      <h2 class='auth__form__title'>{{{ formTitle }}}</h2>
    {{/if}}
  `;
  Object.values(enumFormFieldsNames).forEach((fieldName) => {
    content = `
      ${content}
      {{{ ${fieldName}_child }}}
    `;
  });
  content = `
      ${content}
      <div class="profile__data__apiSuccess">
        {{#if apiResponseSuccess }} 
          <span class="api-success"> {{ apiResponseSuccess }} </span>
        {{/if}}
      </div>
      <div class="profile__data__apiError">
        {{#if apiResponseError }} 
          <span> {{ apiResponseError }} </span>
        {{/if}}
      </div>
      {{#if isSubmitButtonNeeded}}
        <div class="auth__form__buttonContainer">
          {{{ submitButton }}}
          {{{ link }}}
        </div>
      {{/if}}
  `;

  return getComponentTemplate({ tag, content });
}
