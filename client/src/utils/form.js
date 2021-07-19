/**
 * Calculate the size of an input.
 *
 * Useful for uncontrolled inputs where a minimum size
 * is desired (like when using react hook form).
 */
export function inputSize(value, defaultSize) {
  const currentSize = value ? value.length : 0;

  return Math.max(currentSize, defaultSize);
}
