import ReLikeUtils from '../../ReLikeUtils';

import actionTypes from '../actions/ReLikeActionTypes';

import { newLikeEvent, accountChangedEvent } from '../actions/ReLikeActions';

import reLikeAsyncActionCreator from '../actions/asyncActions/reLikeAsyncActionCreator';

const ReLikeMiddleware = store => {
  const { dispatch } = store;

  const reLikeUtils = new ReLikeUtils({
    onAccountChangeEvent: newAccount => dispatch(accountChangedEvent(newAccount)),
    onLikeEvent: likeData => dispatch(newLikeEvent(likeData)),
  });

  const {
    dislike,
    like,
    getLikeCount,
    getLikeData,
    getMyRating,
    unDislike,
    unLike,
  } = reLikeAsyncActionCreator(reLikeUtils);

  return next => action => {
    switch (action.type) {
      case actionTypes.DISLIKE: {
        const { payload: { entityId } } = action;
        return dispatch(dislike(entityId));
      }

      case actionTypes.GET_LIKE_COUNT: {
        const { payload: { entityId } } = action;
        return dispatch(getLikeCount(entityId));
      }

      case actionTypes.GET_LIKE_DATA: {
        const { payload: { entityId } } = action;
        return dispatch(getLikeData(entityId));
      }

      case actionTypes.GET_MY_RATING: {
        const { payload: { entityId } } = action;
        return dispatch(getMyRating(entityId));
      }

      case actionTypes.LIKE: {
        const { payload: { entityId } } = action;
        return dispatch(like(entityId));
      }

      case actionTypes.UNDISLIKE: {
        const { payload: { entityId } } = action;
        return dispatch(unDislike(entityId));
      }

      case actionTypes.UNLIKE: {
        const { payload: { entityId } } = action;
        return dispatch(unLike(entityId));
      }

      default:
        return next(action);
    }
  };
};

export default ReLikeMiddleware;
