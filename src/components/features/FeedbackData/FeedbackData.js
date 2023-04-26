import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackData.module.scss';
import { getAllFeedbacks } from '../../../redux/feedbackRedux';
import Swipeable from '../Swipeable/Swipeable';
import { useSelector } from 'react-redux';

const FeedbackData = () => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const feedbacks = useSelector(state => getAllFeedbacks(state));

  const handleClickRight = () => {
    const nextFeedbackIndex = currentFeedbackIndex + 1;
    if (nextFeedbackIndex < feedbacks.length) {
      setCurrentFeedbackIndex(nextFeedbackIndex);
    } else {
      setCurrentFeedbackIndex(0);
    }
  };

  const handleClickLeft = () => {
    const previousFeedbackIndex = currentFeedbackIndex - 1;
    if (previousFeedbackIndex >= 0) {
      setCurrentFeedbackIndex(previousFeedbackIndex);
    }
  };

  const currentFeedback = feedbacks[currentFeedbackIndex];

  return (
    <div className={styles.feedbackData}>
      <div className={styles.feedback}>
        <div className={styles.h1}>
          <h1>&quot;</h1>
        </div>
        <Swipeable leftAction={handleClickLeft} rightAction={handleClickRight}>
          <article key={currentFeedback.id} className={styles.article}>
            <div className={styles.content}>
              <p>{currentFeedback.content}</p>
            </div>
            <div className={`row ${styles.contentRow}`}>
              <div className={styles.image}>
                <img
                  alt={currentFeedback.name}
                  src={`${process.env.PUBLIC_URL}${currentFeedback.image}`}
                />
              </div>
              <div className={styles.sign}>
                <p>{currentFeedback.name}</p>
                <p>{currentFeedback.nickName}</p>
              </div>
            </div>
          </article>
        </Swipeable>
      </div>
    </div>
  );
};

FeedbackData.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  nickName: PropTypes.string,
  image: PropTypes.string,
  handleSwipeLeft: PropTypes.func,
  handleSwipeRight: PropTypes.func,
};

export default FeedbackData;
