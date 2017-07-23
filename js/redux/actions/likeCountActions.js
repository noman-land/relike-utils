import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const getLikeCountError = createAction(
  actionTypes.GET_LIKE_COUNT_ERROR,
  error => ({ error }),
  (error, entityId) => ({ error, entityId }),
);

export const getLikeCountStart = createAction(
  actionTypes.GET_LIKE_COUNT_START,
  entityId => ({ entityId }),
);

export const getLikeCountSuccess = createAction(
  actionTypes.GET_LIKE_COUNT_SUCCESS,
  result => ({ result }),
  (result, entityId) => ({ entityId }),
);
