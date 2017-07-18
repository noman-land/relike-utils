import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

export const accountChanged = createAction(
  actionTypes.ACCOUNT_CHANGED,
  newAccount => ({ newAccount }),
);

export const dislike = createAction(
  actionTypes.DISLIKE,
  entityId => ({ entityId }),
);

export const getLikeCount = createAction(
  actionTypes.GET_LIKE_COUNT,
  entityId => ({ entityId }),
);

export const getLikeData = createAction(
  actionTypes.GET_LIKE_DATA,
  entityId => ({ entityId }),
);

export const getMyRating = createAction(
  actionTypes.GET_MY_RATING,
  entityId => ({ entityId }),
);

export const like = createAction(
  actionTypes.LIKE,
  entityId => ({ entityId }),
);

export const newLike = createAction(
  actionTypes.NEW_LIKE,
  ({ dislikes, entityId, likes, rating, user }) => ({ dislikes, entityId, likes, rating, user }),
);

export const unDislike = createAction(
  actionTypes.UNDISLIKE,
  entityId => ({ entityId }),
);

export const unLike = createAction(
  actionTypes.UNLIKE,
  entityId => ({ entityId }),
);

export default {
  accountChanged,
  dislike,
  getLikeCount,
  getLikeData,
  getMyRating,
  like,
  newLike,
  unDislike,
  unLike,
};
