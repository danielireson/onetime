export function classList(...args) {
  return args.reduce((result, arg) => {
    if (typeof arg === "string") {
      // always append strings to result
      return result + ` ${arg}`;
    } else if (typeof arg === "object") {
      // evaluate object conditions before appending
      return (
        result +
        Object.entries(arg)
          .filter(([_, bool]) => bool)
          .map(([str, _]) => ` ${str}`)
      );
    } else {
      return result;
    }
  }, "");
}
