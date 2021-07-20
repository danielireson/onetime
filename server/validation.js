const TIMER_ID_SCHEME = /^[A-Z0-9-_]+$/i;

/**
 * Check whether a timer id is valid.
 */
module.exports.isValidTimerId = (timerId) => {
  return timerId && TIMER_ID_SCHEME.test(timerId);
};

/**
 * Check whether a UNIX timestamp is valid.
 */
module.exports.isValidTimestamp = (timestamp) => {
  return !!new Date(timestamp).getTime();
};
