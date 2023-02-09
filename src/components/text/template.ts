import getComponentTemplate from "utils/components/templateGenerator";

const content = `
{{#if text}}
  {{ text }}
{{else}}
  ""
{{/if}}
`;

export default (tag: string) => getComponentTemplate({ tag, content });
