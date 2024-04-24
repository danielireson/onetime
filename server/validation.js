const TIMER_ID_SCHEME = /^[A-Z0-9-_]+$/i;

/**
 * Check whether a timer id is valid.
 */
export const isValidTimerId = (timerId) => {
  return timerId && TIMER_ID_SCHEME.test(timerId);
};

/**
 * Check whether a UNIX timestamp is valid.
 */
export const isValidTimestamp = (timestamp) => {
  return !!new Date(timestamp).getTime();
};
