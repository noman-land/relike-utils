import actionTypes from '../actions/ReLikeActionTypes';

import {
  getLikeCount,
  getLikeData,
  getMyRating,
} from '../actions/asyncActions/ReLikeAsyncActions';

const ReLikeMiddleware = store => next => action => {
  switch (action.type) {
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

    default:
      break;
  }

  return next(action);
};

export default ReLikeMiddleware;
