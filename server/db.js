const timers = {};

/**
 * Get timer from in-memory data store.
 */
export const getTimer = (timerId) => timers[timerId];

/**
 * Create or update timer in in-memory data store.
 */
export const setTimer = (timerId, endTime) => {
  const timer = {
    endTime,
  };

  timers[timerId] = timer;

  return timer;
};

/**
 * Delete timer from in-memory data store.
 */
export const deleteTimer = (timerId) => {
  delete timers[timerId];
};
