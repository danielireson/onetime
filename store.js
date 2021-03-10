const timers = {};

module.exports.getTimer = (timerId) => timers[timerId];

module.exports.createTimer = (timerId, endTime) => {
  const timer = {
    endTime,
  };

  timers[timerId] = timer;

  return timer;
};

module.exports.updateTimer = (timerId, endTime) => {
  const timer = module.exports.getTimer(timerId);

  timer.endTime = endTime;

  return timer;
};

module.exports.deleteTimer = (timerId) => {
  delete timers[timerId];
};
