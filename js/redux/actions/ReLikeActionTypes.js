function prefix(actionType) {
  return `@@RELIKE/${actionType}`;
}

export default {
  ACCOUNT_CHANGED_EVENT: prefix('ACCOUNT_CHANGED_EVENT'),

  DISLIKE: prefix('DISLIKE'),
  DISLIKE_ERROR: prefix('DISLIKE_ERROR'),
  DISLIKE_START: prefix('DISLIKE_START'),
  DISLIKE_SUCCESS: prefix('DISLIKE_SUCCESS'),

  GET_LIKE_COUNT: prefix('GET_LIKE_COUNT'),
  GET_LIKE_COUNT_ERROR: prefix('GET_LIKE_COUNT_ERROR'),
  GET_LIKE_COUNT_START: prefix('GET_LIKE_COUNT_START'),
  GET_LIKE_COUNT_SUCCESS: prefix('GET_LIKE_COUNT_SUCCESS'),

  GET_LIKE_DATA: prefix('GET_LIKE_DATA'),
  GET_LIKE_DATA_ERROR: prefix('GET_LIKE_DATA_ERROR'),
  GET_LIKE_DATA_START: prefix('GET_LIKE_DATA_START'),
  GET_LIKE_DATA_SUCCESS: prefix('GET_LIKE_DATA_SUCCESS'),

  GET_MY_RATING: prefix('GET_MY_RATING'),
  GET_MY_RATING_ERROR: prefix('GET_MY_RATING_ERROR'),
  GET_MY_RATING_START: prefix('GET_MY_RATING_START'),
  GET_MY_RATING_SUCCESS: prefix('GET_MY_RATING_SUCCESS'),

  LIKE: prefix('LIKE'),
  LIKE_ERROR: prefix('LIKE_ERROR'),
  LIKE_START: prefix('LIKE_START'),
  LIKE_SUCCESS: prefix('LIKE_SUCCESS'),

  NEW_LIKE_EVENT: prefix('NEW_LIKE'),

  UNDISLIKE: prefix('UNDISLIKE'),
  UNDISLIKE_ERROR: prefix('UNDISLIKE_ERROR'),
  UNDISLIKE_START: prefix('UNDISLIKE_START'),
  UNDISLIKE_SUCCESS: prefix('UNDISLIKE_SUCCESS'),

  UNLIKE: prefix('UNLIKE'),
  UNLIKE_ERROR: prefix('UNLIKE_ERROR'),
  UNLIKE_START: prefix('UNLIKE_START'),
  UNLIKE_SUCCESS: prefix('UNLIKE_SUCCESS'),
};
