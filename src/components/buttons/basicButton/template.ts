import getComponentTemplate from "utils/components/templateGenerator";

const tag = "button";

const content = `
{{#if label}}
  {{ label }}
{{/if}}
`;

export default getComponentTemplate({ tag, content });
