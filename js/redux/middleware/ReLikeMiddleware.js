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

    case actionTypes.GET_LIKE_COUNT: {
      const { payload: { entityId } } = action;
      store.dispatch(getLikeCount(entityId));
      break;
    }

    case actionTypes.GET_LIKE_DATA: {
      const { payload: { entityId } } = action;
      store.dispatch(getLikeData(entityId));
      break;
    }

    case actionTypes.GET_MY_RATING: {
      const { payload: { entityId } } = action;
      store.dispatch(getMyRating(entityId));
      break;
    }

    case actionTypes.LIKE: {
      const { payload: { entityId } } = action;
      store.dispatch(like(entityId));
      break;
    }

    case actionTypes.UNDISLIKE: {
      const { payload: { entityId } } = action;
      store.dispatch(unDislike(entityId));
      break;
    }

    case actionTypes.UNLIKE: {
      const { payload: { entityId } } = action;
      store.dispatch(unLike(entityId));
      break;
    }

    default:
      return next(action);
  }
};

export default ReLikeMiddleware;
