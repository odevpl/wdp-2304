import React from 'react';
import styles from './Reviews.module.scss';
import ProductRating from '../ProductRating/ProductRating';

const Reviews = () => {
  return (
    <div className={styles.root}>
      <div className={styles.reviewsContainer}>
        <div className={styles.insideReviews}>
          <div className={styles.menuBar}>
            <p>DESCRIPTION</p>
          </div>
          <div className={`${styles.menuBar} ${styles.active}`}>
            <p>REVIEWS (0)</p>
          </div>
          <div className={styles.menuBar}>
            <p>SPECIFICATION</p>
          </div>
          <div className={styles.menuBar}>
            <p>CUSTOM TAB</p>
          </div>
        </div>
        <div className={styles.insideBox}>
          <p>There are no reviews for this product</p>
          <h6>Add a review</h6>
          <p>Your Rating</p>
          <div className={styles.rating}>
            <p>Bad</p>
            <div className={styles.stars}>
              <ProductRating />
            </div>
            <p>Good</p>
          </div>
          <form className={styles.form}>
            <p>Your review</p>
            <textarea className={'col-12 mb-3'} rows='4' type='text'></textarea>
            <div className={styles.inputBox}>
              <div className={styles.input}>
                <input className='form control' type='text' placeholder='Name'></input>
              </div>
              <div className={styles.input}>
                <input className='form control' type='text' placeholder='Mail'></input>
              </div>
              <button className={styles.button} type='submit'>
                CONTINUE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
