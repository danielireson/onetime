const timers = {};

module.exports.getTimer = (timerId) => timers[timerId];

module.exports.createTimer = (timerId, endTime) => {
  const timer = {
    endTime,
  };

  timers[timerId] = timer;

  return timer;
};

module.exports.deleteTimer = (timerId) => {
  delete timers[timerId];
};
