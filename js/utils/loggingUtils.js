const APP_PREFIX = '* * * RELIKE * * *:';

export const log = message => (info) => {
  console.info(APP_PREFIX, message, info); // eslint-disable-line
};

export const logError = message => (error) => {
  console.error(APP_PREFIX, message, error); // eslint-disable-line
};

export const logInfo = message => (info) => {
  console.info(APP_PREFIX, message, info); // eslint-disable-line
};

export const logWarning = message => (warning) => {
  console.warn(APP_PREFIX, message, warning); // eslint-disable-line
};

export default {
  log,
  logError,
  logInfo,
  logWarning,
};
