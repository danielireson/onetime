/**
 * Check whether a UNIX timestamp is valid.
 */
export function isValidTimestamp(timestamp) {
  return !!new Date(timestamp).getTime();
}

/**
 * Convert UNIX timestamp to minutes and seconds.
 */
export function friendlyTime(timestamp) {
  // convert milliseconds to whole minutes and remaining seconds
  const totalSeconds = (timestamp - Date.now()) / 1000;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds - minutes * 60);

  // time has passed so no countdown
  if (minutes < 0) {
    return {
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    minutes: minutes,
    seconds: seconds,
  };
}

/**
 * Get future time from additional minutes.
 *
 * Returns UNIX timestamp.
 */
export function futureTime(minutes) {
  if (isNaN(minutes)) {
    return Date.now();
  }

  // time in milliseconds
  return Date.now() + minutes * 60 * 1000;
}
