import ReLikeUtils from '../../ReLikeUtils';

import actionTypes from '../actions/ReLikeActionTypes';

import {
  dislike,
  like,
  getLikeCount,
  getLikeData,
  getMyRating,
  unDislike,
  unLike,
} from '../actions/asyncActions/ReLikeAsyncActions';

const ReLikeMiddleware = store => next => action => {
  switch (action.type) {
    case actionTypes.DISLIKE: {
      const { payload: { entityId } } = action;
      store.dispatch(dislike(entityId));
      break;
    }

import reLikeAsyncActionCreator from '../actions/asyncActions/reLikeAsyncActionCreator';

const ReLikeMiddleware = store => {
  const { dispatch } = store;

  const reLikeUtils = new ReLikeUtils({
    onAccountChange: newAccount => dispatch(accountChanged(newAccount)),
    onLikeEvent: entityId => dispatch(newLike(entityId)),
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
        dispatch(dislike(entityId));
        break;
      }

      case actionTypes.GET_LIKE_COUNT: {
        const { payload: { entityId } } = action;
        dispatch(getLikeCount(entityId));
        break;
      }

      case actionTypes.GET_LIKE_DATA:
      case actionTypes.NEW_LIKE: {
        const { payload: { entityId } } = action;
        dispatch(getLikeData(entityId));
        break;
      }

      case actionTypes.GET_MY_RATING: {
        const { payload: { entityId } } = action;
        dispatch(getMyRating(entityId));
        break;
      }

      case actionTypes.LIKE: {
        const { payload: { entityId } } = action;
        dispatch(like(entityId));
        break;
      }

      case actionTypes.UNDISLIKE: {
        const { payload: { entityId } } = action;
        dispatch(unDislike(entityId));
        break;
      }

      case actionTypes.UNLIKE: {
        const { payload: { entityId } } = action;
        dispatch(unLike(entityId));
        break;
      }

      default:
        return next(action);
    }
  };
};

export default ReLikeMiddleware;
