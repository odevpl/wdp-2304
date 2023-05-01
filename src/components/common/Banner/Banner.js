import React from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.scss';
import { Link } from 'react-router-dom';

const Banner = ({ product }) => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={styles.bannerContainer}>
        <div className={styles.textArea}>
          <div className={styles.firstRow}>
            Bedroom <span className={styles.textDecoration}>Furniture</span>
          </div>
          <div className={styles.secondRow}>
            Always <span className={styles.textDecoration}>25%</span> off or more
          </div>
        </div>
      </div>
      <div className={styles.pathContainer}>
        <div className={styles.textArea}>
          <Link to='/' className={styles.link}>
            Home
          </Link>{' '}
          &gt; Product &gt;{' '}
          <span className={styles.textDecoration}>{product.name}</span>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Banner;
