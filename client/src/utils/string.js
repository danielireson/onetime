/**
 * Generate random alphanumeric lowercase string.
 */
export function randomString(length, value = "") {
  if (value.length === length) {
    return value;
  }

  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const character = characters.charAt(
    Math.floor(Math.random() * characters.length)
  );

  return randomString(length, value + character);
}
