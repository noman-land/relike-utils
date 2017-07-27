import { logError } from '../../../utils/loggingUtils';

import { dislikeError, dislikeStart, dislikeSuccess } from '../dislikeActions';
import { likeError, likeStart, likeSuccess } from '../likeActions';
import { getLikeCountError, getLikeCountStart, getLikeCountSuccess } from '../likeCountActions';
import { getMyRatingError, getMyRatingStart, getMyRatingSuccess } from '../myRatingActions';
import { unLikeError, unLikeStart, unLikeSuccess } from '../unLikeActions';
import { unDislikeError, unDislikeStart, unDislikeSuccess } from '../unDislikeActions';

export default function reLikeAsyncActionCreator(reLikeUtils) {
  const dislike = ({ entityId, timestamp }) => dispatch => {
    dispatch(dislikeStart(entityId, timestamp));

    return reLikeUtils.dislike(entityId)
      .then(result => dispatch(dislikeSuccess(result, entityId, timestamp)))
      .catch(error => {
        logError('Error disliking')(error, entityId, timestamp);
        dispatch(dislikeError(error, entityId, timestamp));
      });
  };

  const getLikeCount = entityId => dispatch => {
    dispatch(getLikeCountStart(entityId));

    return reLikeUtils.getLikeCount(entityId)
      .then(result => dispatch(getLikeCountSuccess(result, entityId)))
      .catch(error => {
        logError('Error getting likeCount')(error, entityId);
        dispatch(getLikeCountError(error, entityId));
      });
  };

  const getLikeData = entityId => dispatch => {
    dispatch(getLikeCount(entityId));
    dispatch(getMyRating(entityId));
  };

  const getMyRating = entityId => dispatch => {
    dispatch(getMyRatingStart(entityId));

    return reLikeUtils.getMyRating(entityId)
      .then(result => dispatch(getMyRatingSuccess(result, entityId)))
      .catch(error => {
        logError('Error getting myRating')(error, entityId);
        dispatch(getMyRatingError(error, entityId));
      });
  };

  const like = ({ entityId, timestamp }) => dispatch => {
    dispatch(likeStart(entityId, timestamp));

    return reLikeUtils.like(entityId)
      .then(result => dispatch(likeSuccess(result, entityId, timestamp)))
      .catch(error => {
        logError('Error liking')(error, entityId, timestamp);
        dispatch(likeError(error, entityId, timestamp));
      });
  };

  const unDislike = ({ entityId, timestamp }) => dispatch => {
    dispatch(unDislikeStart(entityId, timestamp));

    return reLikeUtils.unDislike(entityId)
      .then(result => dispatch(unDislikeSuccess(result, entityId, timestamp)))
      .catch(error => {
        logError('Error unDisliking')(error, entityId, timestamp);
        dispatch(unDislikeError(error, entityId, timestamp));
      });
  };

  const unLike = ({ entityId, timestamp }) => dispatch => {
    dispatch(unLikeStart(entityId, timestamp));

    return reLikeUtils.unLike(entityId)
      .then(result => dispatch(unLikeSuccess(result, entityId, timestamp)))
      .catch(error => {
        logError('Error unLiking')(error, entityId, timestamp);
        dispatch(unLikeError(error, entityId, timestamp));
      });
  };

  return {
    dislike,
    getLikeCount,
    getLikeData,
    getMyRating,
    like,
    unDislike,
    unLike,
  };
}
