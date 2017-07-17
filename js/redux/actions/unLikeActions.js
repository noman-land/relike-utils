import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const unLikeError = createAction(
  actionTypes.UNLIKE_ERROR,
  error => ({ error }),
);

export const unLikeStart = createAction(
  actionTypes.UNLIKE_START,
  entityId => ({ entityId }),
);

export const unLikeSuccess = createAction(
  actionTypes.UNLIKE_SUCCESS,
  result => ({ result }),
  (result, entityId) => ({ entityId }),
);
