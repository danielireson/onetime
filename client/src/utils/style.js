/**
 * Build class list string from arguments.
 *
 * Nulls are always ignored. Strings are always added. Objects
 * are evaluated (where keys are class names and values are
 * boolean conditions when to apply them).
 */
export function classList(...args) {
  return args.reduce((result, arg) => {
    if (typeof arg === "string") {
      return result + `${arg} `;
    } else if (typeof arg === "object") {
      return (
        result +
        Object.entries(arg)
          .filter(([_, bool]) => bool)
          .map(([str, _]) => `${str} `)
      );
    } else {
      return result;
    }
  }, "");
}
