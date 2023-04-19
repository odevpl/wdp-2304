import React from 'react';
import styles from './SectionBrands.module.scss';
import { getBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SectionBrands = () => {
  const brands = useSelector(state => getBrands(state));

  return (
    <div className={`container ${styles.root}`}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} />
          <div className={styles.brandImage}>
            <img src={brands.firstBrand} alt='brand' />
          </div>
          <div className={styles.brandImage}>
            <img src={brands.secondBrand} alt='brand' />
          </div>
          <div className={styles.brandImage}>
            <img src={brands.thirdBrand} alt='brand' />
          </div>
          <div className={styles.brandImage}>
            <img src={brands.fourthBrand} alt='brand' />
          </div>
          <div className={styles.brandImage}>
            <img src={brands.fifthBrand} alt='brand' />
          </div>
          <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} />
        </div>
      </div>
    </div>
  );
};

export default SectionBrands;
