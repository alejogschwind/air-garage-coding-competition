export const calculateScore = (rating, totalReviews) => {
  return (rating * totalReviews / (totalReviews + 1));
}