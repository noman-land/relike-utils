import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const dislikeError = createAction(
  actionTypes.DISLIKE_ERROR,
  error => ({ error }),
  (error, entityId, timestamp) => ({ entityId, timestamp }),
);

export const dislikeStart = createAction(
  actionTypes.DISLIKE_START,
  (entityId, timestamp) => ({ entityId, timestamp }),
);

export const dislikeSuccess = createAction(
  actionTypes.DISLIKE_SUCCESS,
  result => ({ result }),
  (result, entityId, timestamp) => ({ entityId, timestamp }),
);
