import {useCallback, useMemo, useState} from "react";

const useReviews = (reviews) => {
  const reviewsLength = reviews.length - 1;
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentReview = useMemo(() => {
    return reviews[currentIndex];
  }, [reviews, currentIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(prev => prev <= 0 ? reviewsLength : prev - 1);
  }, [reviewsLength]);

  const goToNext = useCallback(() => {
    setCurrentIndex(prev => prev >= reviewsLength ? 0 : prev + 1);
  }, [reviewsLength]);

  const goToIndex = useCallback((index) => {
    if (index >= 0 && index <= reviewsLength) {
      setCurrentIndex(index);
    }
  }, [reviewsLength]);

  return {
    currentReview,
    currentIndex,
    goToPrevious,
    goToNext,
    goToIndex,
    totalReviews: reviews.length
  };
};

export default useReviews;