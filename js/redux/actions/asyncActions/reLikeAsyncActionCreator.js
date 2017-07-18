import { logError } from '../../../utils/loggingUtils';

import { dislikeError, dislikeStart, dislikeSuccess } from '../dislikeActions';
import { likeError, likeStart, likeSuccess } from '../likeActions';
import { getLikeCountError, getLikeCountStart, getLikeCountSuccess } from '../likeCountActions';
import { getMyRatingError, getMyRatingStart, getMyRatingSuccess } from '../myRatingActions';
import { unLikeError, unLikeStart, unLikeSuccess } from '../unLikeActions';
import { unDislikeError, unDislikeStart, unDislikeSuccess } from '../unDislikeActions';

export default function reLikeAsyncActionCreator(reLikeUtils) {
  const dislike = entityId => dispatch => {
    dispatch(dislikeStart(entityId));

    return reLikeUtils.dislike(entityId)
      .then(result => dispatch(dislikeSuccess(result, entityId)))
      .catch(error => {
        logError('Error disliking')(error);
        dispatch(dislikeError(error, entityId));
      });
  };

  const getLikeCount = entityId => dispatch => {
    dispatch(getLikeCountStart(entityId));

    return reLikeUtils.getLikeCount(entityId)
      .then(result => dispatch(getLikeCountSuccess(result, entityId)))
      .catch(error => {
        logError('Error getting likeCount')(error);
        dispatch(getLikeCountError(error));
      });
  };

  const getMyRating = entityId => dispatch => {
    dispatch(getMyRatingStart(entityId));

    return reLikeUtils.getMyRating(entityId)
      .then(result => dispatch(getMyRatingSuccess(result, entityId)))
      .catch(error => {
        logError('Error getting myRating')(error);
        dispatch(getMyRatingError(error));
      });
  };

  const getLikeData = entityId => dispatch => {
    dispatch(getLikeCount(entityId));
    dispatch(getMyRating(entityId));
  };

  const like = entityId => dispatch => {
    dispatch(likeStart(entityId));

    return reLikeUtils.like(entityId)
      .then(result => dispatch(likeSuccess(result, entityId)))
      .catch(error => {
        logError('Error liking')(error);
        dispatch(likeError(error, entityId));
      });
  };

  const unDislike = entityId => dispatch => {
    dispatch(unDislikeStart(entityId));

    return reLikeUtils.unDislike(entityId)
      .then(result => dispatch(unDislikeSuccess(result, entityId)))
      .catch(error => {
        logError('Error unDisliking')(error);
        dispatch(unDislikeError(error, entityId));
      });
  };

  const unLike = entityId => dispatch => {
    dispatch(unLikeStart(entityId));

    return reLikeUtils.unLike(entityId)
      .then(result => dispatch(unLikeSuccess(result, entityId)))
      .catch(error => {
        logError('Error unLiking')(error);
        dispatch(unLikeError(error, entityId));
      });
  };

  return {
    dislike,
    getLikeCount,
    getMyRating,
    getLikeData,
    like,
    unDislike,
    unLike,
  };
}
