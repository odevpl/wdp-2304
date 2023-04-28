import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HeaderPanelBar from '../../common/HeaderPanelBar/HeaderPanelBar';
import FeedbackData from '../FeedbackData/FeedbackData';
import styles from './ClientFeedback.module.scss';
import { getAll } from '../../../redux/feedbackRedux';

const ClientFeedback = () => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const feedbacks = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.featureBar}>
          <div className='row no-gutters align-items-end'>
            <HeaderPanelBar title='Client Feedback' />
            <div className={'col-auto ' + styles.dots}>
              <ul>
                {feedbacks.map((feedback, index) => (
                  <li key={feedback.id}>
                    <a
                      className={currentFeedbackIndex === index ? styles.active : ''}
                      onClick={() => setCurrentFeedbackIndex(index)}
                    >
                      .
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <FeedbackData index={currentFeedbackIndex} />
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
