export default function buildPath(...args: string[]) {
  return args
    .map((part, i) => {
      if (i === 0) {
        return part.trim().replace(/[/]*$/g, "");
      }
      return part.trim().replace(/(^[/]*|[/]*$)/g, "");
    })
    .join("/");
}
