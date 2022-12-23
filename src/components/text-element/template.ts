import getTemplate from '../../utils/componentTemplateGenerator';

const content = `
{{#if htmlClass}} 
  class="{{htmlClass}}" 
{{/if}}

{{#if text}}
  {{ text }}
{{else}}
  ""
{{/if}}
`;

export default (tag: string) => getTemplate({ tag, content });
