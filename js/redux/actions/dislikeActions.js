import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const dislikeError = createAction(
  actionTypes.DISLIKE_ERROR,
  error => ({ error }),
  (error, entityId) => ({ entityId }),
);

export const dislikeStart = createAction(
  actionTypes.DISLIKE_START,
  entityId => ({ entityId }),
);

export const dislikeSuccess = createAction(
  actionTypes.DISLIKE_SUCCESS,
  result => ({ result }),
  (result, entityId) => ({ entityId }),
);
