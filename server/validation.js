const TIMER_ID_SCHEME = /^[A-Z0-9]+$/i;

module.exports.isValidTimerId = (timerId) => {
  return timerId && TIMER_ID_SCHEME.test(timerId);
};

module.exports.isValidTimestamp = (timestamp) => {
  return !!new Date(timestamp).getTime();
};
