import ReLikeUtils from '../../../ReLikeUtils';

import { logError } from '../../../utils/loggingUtils';

import { dislikeError, dislikeStart, dislikeSuccess } from '../dislikeActions';
import { likeError, likeStart, likeSuccess } from '../likeActions';
import { getLikeCountError, getLikeCountStart, getLikeCountSuccess } from '../likeCountActions';
import { getMyRatingError, getMyRatingStart, getMyRatingSuccess } from '../myRatingActions';
import { unLikeError, unLikeStart, unLikeSuccess } from '../unLikeActions';
import { unDislikeError, unDislikeStart, unDislikeSuccess } from '../unDislikeActions';

const reLikeUtils = new ReLikeUtils();

export function dislike(entityId) {
  return dispatch => {
    dispatch(dislikeStart(entityId));

    return reLikeUtils.dislike(entityId)
      .then(result => dispatch(dislikeSuccess(result, entityId)))
      .catch(error => {
        logError('Error disliking')(error);
        dispatch(dislikeError(error));
      });
  };
}

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

export function like(entityId) {
  return dispatch => {
    dispatch(likeStart(entityId));

    return reLikeUtils.like(entityId)
      .then(result => dispatch(likeSuccess(result, entityId)))
      .catch(error => {
        logError('Error liking')(error);
        dispatch(likeError(error));
      });
  };
}

export function unDislike(entityId) {
  return dispatch => {
    dispatch(unDislikeStart(entityId));

    return reLikeUtils.unDislike(entityId)
      .then(result => dispatch(unDislikeSuccess(result, entityId)))
      .catch(error => {
        logError('Error unDisliking')(error);
        dispatch(unDislikeError(error));
      });
  };
}

export function unLike(entityId) {
  return dispatch => {
    dispatch(unLikeStart(entityId));

    return reLikeUtils.unLike(entityId)
      .then(result => dispatch(unLikeSuccess(result, entityId)))
      .catch(error => {
        logError('Error unLiking')(error);
        dispatch(unLikeError(error));
      });
  };
}
