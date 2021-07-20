const timers = {};

/**
 * Get timer from in-memory data store.
 */
module.exports.getTimer = (timerId) => timers[timerId];

/**
 * Create or update timer in in-memory data store.
 */
module.exports.setTimer = (timerId, endTime) => {
  const timer = {
    endTime,
  };

  timers[timerId] = timer;

  return timer;
};

/**
 * Delete timer from in-memory data store.
 */
module.exports.deleteTimer = (timerId) => {
  delete timers[timerId];
};
