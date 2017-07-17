const APP_PREFIX = '[*** ReLikeUtils ***]';

function isLoggingEnabled() {
  return window.localStorage.getItem('RELIKE_ENABLE_LOGGING') === 'true';
}

export const log = message => (info = '') => {
  isLoggingEnabled() && console.log(APP_PREFIX, message, info); // eslint-disable-line
};

export const logError = message => (error = '') => {
  isLoggingEnabled() && console.error(APP_PREFIX, message, error); // eslint-disable-line
};

export const logInfo = message => (info = '') => {
  isLoggingEnabled() && console.info(APP_PREFIX, message, info); // eslint-disable-line
};

export const logWarning = message => (warning = '') => {
  isLoggingEnabled() && console.warn(APP_PREFIX, message, warning); // eslint-disable-line
};

export default {
  log,
  logError,
  logInfo,
  logWarning,
};
