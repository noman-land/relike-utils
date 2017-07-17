import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const unDislikeError = createAction(
  actionTypes.UNDISLIKE_ERROR,
  error => ({ error }),
);

export const unDislikeStart = createAction(
  actionTypes.UNDISLIKE_START,
  entityId => ({ entityId }),
);

export const unDislikeSuccess = createAction(
  actionTypes.UNDISLIKE_SUCCESS,
  result => ({ result }),
  (result, entityId) => ({ entityId }),
);
