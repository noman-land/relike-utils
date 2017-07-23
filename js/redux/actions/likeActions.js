import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const likeError = createAction(
  actionTypes.LIKE_ERROR,
  error => ({ error }),
  (error, entityId, timestamp) => ({ entityId, timestamp }),
);

export const likeStart = createAction(
  actionTypes.LIKE_START,
  (entityId, timestamp) => ({ entityId, timestamp }),
);

export const likeSuccess = createAction(
  actionTypes.LIKE_SUCCESS,
  result => ({ result }),
  (result, entityId, timestamp) => ({ entityId, timestamp }),
);
