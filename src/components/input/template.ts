import getTemplate from 'utils/components/templateGenerator';

const tag = 'input';
const attributes = `
  {{#if type }}
    type="{{ type }}"
  {{else}}
    type="text"
  {{/if}}

  {{#if value }}
    value="{{ value }}"
  {{/if}}

  {{#if placeholder}}
    placeholder="{{ placeholder }}"
  {{/if}}

  {{#if disabledAttr}}
    disabled
  {{/if}}
`;

export default getTemplate({ tag, attributes });
