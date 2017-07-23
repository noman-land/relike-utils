import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const unDislikeError = createAction(
  actionTypes.UNDISLIKE_ERROR,
  error => ({ error }),
  (error, entityId, timestamp) => ({ entityId, timestamp }),
);

export const unDislikeStart = createAction(
  actionTypes.UNDISLIKE_START,
  (entityId, timestamp) => ({ entityId, timestamp }),
);

export const unDislikeSuccess = createAction(
  actionTypes.UNDISLIKE_SUCCESS,
  result => ({ result }),
  (result, entityId, timestamp) => ({ entityId, timestamp }),
);
