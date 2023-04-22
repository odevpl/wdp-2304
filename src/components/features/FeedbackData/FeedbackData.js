import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackData.module.scss';

const FeedbackData = ({ ...props }) => {
  return (
    <article>
      <div className={styles.h1}>
        <h1>&quot;</h1>
      </div>
      <div className={styles.content}>
        <p>{props.content}</p>
      </div>
      <div className={`row ${styles.contentRow}`}>
        <div className={styles.image}>
          <img alt={props.name} src={`${process.env.PUBLIC_URL}${props.image}`} />
        </div>
        <div className={styles.sign}>
          <p>{props.name}</p>
          <p>{props.nickName}</p>
        </div>
      </div>
    </article>
  );
};
FeedbackData.propTypes = {
  content: PropTypes.string,
  name: PropTypes.string,
  nickName: PropTypes.string,
  image: PropTypes.string,
};

export default FeedbackData;
