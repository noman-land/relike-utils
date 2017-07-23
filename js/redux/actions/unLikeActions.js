import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const unLikeError = createAction(
  actionTypes.UNLIKE_ERROR,
  error => ({ error }),
  (error, entityId, timestamp) => ({ entityId, timestamp }),
);

export const unLikeStart = createAction(
  actionTypes.UNLIKE_START,
  (entityId, timestamp) => ({ entityId, timestamp }),
);

export const unLikeSuccess = createAction(
  actionTypes.UNLIKE_SUCCESS,
  result => ({ result }),
  (result, entityId, timestamp) => ({ entityId, timestamp }),
);
