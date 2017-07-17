import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const likeError = createAction(
  actionTypes.LIKE_ERROR,
  error => ({ error }),
  (error, entityId) => ({ entityId }),
);

export const likeStart = createAction(
  actionTypes.LIKE_START,
  entityId => ({ entityId }),
);

export const likeSuccess = createAction(
  actionTypes.LIKE_SUCCESS,
  result => ({ result }),
  (result, entityId) => ({ entityId }),
);
