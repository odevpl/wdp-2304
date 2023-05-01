import React from 'react';
import styles from './Promotions.module.scss';
import { getPromotions } from '../../../redux/promotionsRedux';
import { useSelector } from 'react-redux';

const SectionPromotions = () => {
  const promos = useSelector(state => getPromotions(state));

  return (
    <div className={`container ${styles.root}`}>
      <div className='row'>
        <div className='col-12 col-md-6'>
          <div className={styles.firstBox}>
            <div className={styles.imageBox}>
              <img src={`${process.env.PUBLIC_URL}${promos.firstBoxImage}`}></img>
              <div className={styles.imageBoxContent}>
                <h5>{promos.firstBoxTitle}</h5>
                <h1>{promos.firstBoxFurniture}</h1>
                <div className={styles.discountBox}>
                  <h5>{promos.firstBoxDiscount}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-12 col-md-6'>
          <div className={styles.secondBox}>
            <div className={styles.secondImage}>
              <img src={`${process.env.PUBLIC_URL}${promos.secondBoxImage}`}></img>
              <div className={styles.secondImageContent}>
                <h3>
                  <span>{promos.secondBoxTitle}</span> {promos.secondBoxFutniture}{' '}
                </h3>
                <h6>{promos.secondBoxText}</h6>
                <div className={styles.secondBoxPrice}>
                  <h2>{promos.secondBoxPrice}</h2>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.thirdBox}>
            <div className={styles.secondImage}>
              <img src={`${process.env.PUBLIC_URL}${promos.thirdBoxImage}`}></img>
              <div className={styles.thirdImageContent}>
                <h2>
                  <span>{promos.thirdBoxTitle}</span> {promos.thirdBoxText}
                </h2>
                <h6>{promos.thirdBoxContent}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPromotions;
