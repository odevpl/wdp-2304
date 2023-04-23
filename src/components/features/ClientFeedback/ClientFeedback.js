import React from 'react';
import { useSelector } from 'react-redux';

import FeedbackData from '../FeedbackData/FeedbackData';
import styles from './ClientFeedback.module.scss';
import { getAll } from '../../../redux/feedbackRedux';

const ClientFeedback = () => {
  const data = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.featureBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Client Feedback</h3>
            </div>

            <div className={'col-auto ' + styles.dots}>
              <ul>
                <li>
                  <a className={styles.active}>.</a>
                </li>
                <li>
                  <a>.</a>
                </li>
                <li>
                  <a>.</a>
                </li>
              </ul>
            </div>
          </div>
          {data.map(feedback => (
            <FeedbackData key={feedback.id} {...feedback} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
