import React from 'react';
import { Link } from 'react-router';

const ReviewAndLearn = ({ courseId, amountOfProblemsToLearn, amountOfProblemsToReview }) =>
  <div className="review-and-learn">
    <div className="amount-of-mems-to-review-and-learn">
      <div className="to-review">
        {amountOfProblemsToReview} to review
      </div>
      <div className="to-learn">
        {amountOfProblemsToLearn} to learn
      </div>
    </div>
    <div className="review-and-learn-more">
      <Link style={amountOfProblemsToReview === 0 ? { visibility: 'hidden' } : {}} className="review" to={`/courses/${courseId}/review`} >
        REVIEW
      </Link>
      <Link style={amountOfProblemsToLearn === 0 ? { visibility: 'hidden' } : {}} className="learn-more" to={`/courses/${courseId}/learn`} >
        LEARN
      </Link>
    </div>
  </div>;

ReviewAndLearn.propTypes = {
  courseId: React.PropTypes.number.isRequired,
  amountOfProblemsToLearn: React.PropTypes.number.isRequired,
  amountOfProblemsToReview: React.PropTypes.number.isRequired
};

export { ReviewAndLearn };
