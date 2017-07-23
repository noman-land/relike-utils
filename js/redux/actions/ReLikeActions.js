import { createAction } from 'redux-actions';

import actionTypes from './ReLikeActionTypes';

import * as dislikeActions from './dislikeActions';
import * as likeActions from './likeActions';
import * as unDislikeActions from './unDislikeActions';
import * as unLikeActions from './unLikeActions';

export const accountChangedEvent = createAction(
  actionTypes.ACCOUNT_CHANGED_EVENT,
  newAccount => ({ newAccount }),
);

export const dislike = createAction(
  actionTypes.DISLIKE,
  entityId => ({ entityId, timestamp: Date.now() }),
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
  entityId => ({ entityId, timestamp: Date.now() }),
);

export const newLikeEvent = createAction(
  actionTypes.NEW_LIKE_EVENT,
  ({ dislikes, entityId, likes, rating, user }) => ({ dislikes, entityId, likes, rating, user }),
);

export const unDislike = createAction(
  actionTypes.UNDISLIKE,
  entityId => ({ entityId, timestamp: Date.now() }),
);

export const unLike = createAction(
  actionTypes.UNLIKE,
  entityId => ({ entityId, timestamp: Date.now() }),
);

export default {
  accountChangedEvent,
  dislike,
  dislikeActions,
  getLikeCount,
  getLikeData,
  getMyRating,
  like,
  likeActions,
  newLikeEvent,
  unDislike,
  unDislikeActions,
  unLike,
  unLikeActions,
};
