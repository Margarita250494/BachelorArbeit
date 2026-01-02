import React, {useState} from "react";
import {customerReviews} from "../Scripts/reviews";
import ArrowButton from './buttons/ArrowButton'
import SectionDefault from './layout/SectionDefault'
import Quote from './Quote'

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
      <div className="">
        <p className="my-4 text-gray-400 text-[22px] md:text-[32px] font-bold tracking-[0.7px] font-serif">
          More over <span className="text-primary-700">1500+ Customers</span>
        </p>

        <h3
          className="my-4 font-serif text-[28px] md:text-[36px] font-bold
        tracking-[0.7px] leading-[2.6rem]"
        >Don't believe us, Check clients word
        </h3>

        <p className="my-16 flex items-center relative">
          <Quote isEnd={false} />
          <span
            className="block ml-2 font-serif text-[22px] md:text-[24px]
            tracking-[0.7px] leading-[1.8rem] md:leading-[2.2rem]"
          >{rMessage}</span>
          <Quote isEnd />
        </p>

        <div className="ml-2 flex flex-wrap justify-between items-center">
          <div>
            <p className="text-[20px] md:text-[24px] font-bold tracking-[0.8px]">{rName}</p>
            <p
              className="mt-[6px] text-gray-400 font-serif text-[18px]
            font-bold tracking-[0.8px]"
            >{rLocation}</p>
          </div>

          <div>
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
