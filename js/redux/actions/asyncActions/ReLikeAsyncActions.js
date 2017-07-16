import ReLikeUtils from '../../../ReLikeUtils';

import { logError } from '../../../utils/loggingUtils';

import {
  getLikeCountError,
  getLikeCountStart,
  getLikeCountSuccess,
} from '../likeCountActions';

import {
  getMyRatingError,
  getMyRatingStart,
  getMyRatingSuccess,
} from '../myRatingActions';

const reLikeUtils = new ReLikeUtils();

export function getLikeCount(entityId) {
  return dispatch => {
    dispatch(getLikeCountStart(entityId));

    return reLikeUtils.getLikeCount(entityId)
      .then(result => dispatch(getLikeCountSuccess(result, entityId)))
      .catch(error => {
        logError('Error getting likeCount')(error);
        dispatch(getLikeCountError(error));
      });
  };
}

export function getMyRating(entityId) {
  return dispatch => {
    dispatch(getMyRatingStart(entityId));

    return reLikeUtils.getMyRating(entityId)
      .then(result => dispatch(getMyRatingSuccess(result, entityId)))
      .catch(error => {
        logError('Error getting myRating')(error);
        dispatch(getMyRatingError(error));
      });
  };
}

export function getLikeData(entityId) {
  return dispatch => {
    dispatch(getLikeCount(entityId));
    dispatch(getMyRating(entityId));
  };
}
