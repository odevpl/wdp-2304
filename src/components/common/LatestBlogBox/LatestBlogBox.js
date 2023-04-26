import React from 'react';
import PropTypes from 'prop-types';
import styles from './LatestBlogBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faComments } from '@fortawesome/free-solid-svg-icons';

const LatestBlogBox = ({ isActive }) => {
  return (
    <article className={styles.boxRow}>
      <div className={styles.root}>
        <div className={styles.grayLayout}>
          <div className={styles.headBar}>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} className={styles.calendar} />
              <span>&nbsp; 15 Jan 2016</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComments} />
              <span>&nbsp; 4 Comments</span>
            </div>
          </div>
        </div>
        <div className={styles.whiteLayout}>
          <div className={styles.content}>
            <h2 className={isActive ? styles.activeText : ''}>
              Products That Fight Static
            </h2>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              Lorem ipsum Lorem ipsum
            </p>
          </div>
          <div>
            <button
              className={`${styles.button} ${isActive ? styles.activeButton : ''}`}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
LatestBlogBox.propTypes = {
  isActive: PropTypes.bool,
};

export default LatestBlogBox;
