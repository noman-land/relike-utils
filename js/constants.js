export const DEFAULT_GAS = 2000000;

export const RatingTypes = {
  DISLIKE: 'DISLIKE',
  LIKE: 'LIKE',
  UNRATED: 'UNRATED',
};

export const Ratings = [
  RatingTypes.UNRATED,
  RatingTypes.LIKE,
  RatingTypes.DISLIKE,
];

export default {
  DEFAULT_GAS,
  Ratings,
  RatingTypes,
};
