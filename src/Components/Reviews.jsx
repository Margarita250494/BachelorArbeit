import React, {useState} from "react";
import {customerReviews} from "../Scripts/reviews";
import "../Styles/Reviews.css";
import ArrowButton from './buttons/ArrowButton'
import SectionDefault from './layout/SectionDefault'

function Reviews() {
  let rMessage, rName, rLocation;
  const reviewsLength = customerReviews.length - 1;
  const [review, setReview] = useState(0);

  // back to previous review
  const backBtnClick = () => {
    setReview(review <= 0 ? reviewsLength : review - 1);
    handleReviewsUpdation();
  };

  // go to newer review
  const frontBtnClick = () => {
    setReview(review >= reviewsLength ? 0 : review + 1);
    handleReviewsUpdation();
  };

  // update reviews
  const handleReviewsUpdation = () => {
    const reviewMessage = customerReviews[review];
    rName = reviewMessage.name;
    rLocation = reviewMessage.location;
    rMessage = reviewMessage.message;
  };

  // list review on visit
  handleReviewsUpdation();

  return (
    <SectionDefault
      id="reviews"
      isBgWhite={false}
      className="tracking-[.8px] md:tracking-normal"
    >
      <div className="rw-text-content">
        <p className="rw-text-title">
          More over <span className="rw-text-num">1500+ Customers</span>
        </p>

        <h2 className="rw-text-desc">Don't believe us, Check clients word</h2>

        <p className="rw-text-format">
          <span className="rw-text-quote1">''</span>
          <span className="rw-review">{rMessage}</span>
          <span className="rw-text-quote2">''</span>
        </p>

        <div className="rw-authors">
          <div className="rw-names">
            <p className="rw-reviewer-name">{rName}</p>
            <p className="rw-reviewer-place">{rLocation}</p>
          </div>

          <div className="rw-btns">
            <ArrowButton
              onClick={backBtnClick}
              arrow="←"
            />
            <ArrowButton
              onClick={frontBtnClick}
              arrow="→"
            />
          </div>
        </div>
      </div>
    </SectionDefault>
  );
}

export default Reviews;
