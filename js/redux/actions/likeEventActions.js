import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const newLikeEvent = createAction(
  actionTypes.NEW_LIKE,
  entityId => ({ entityId }),
);
