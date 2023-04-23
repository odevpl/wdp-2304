import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import styles from './ProductPopUp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import ProductRating from '../../features/ProductRating/ProductRating';

const ProductPopUp = ({ popUpOpen, productData }) => {
  const closePopUp = e => {
    e.preventDefault();
    popUpOpen(false);
  };
  return (
    <div className={styles.root}>
      <div className={styles.popUpWindow}>
        <div className={`${styles.popUpContainer}`}>
          <div className={styles.popUpClose}>
            <Button
              className={styles.popUpClosingBtn}
              variant='outline'
              onClick={closePopUp}
            >
              <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </Button>
          </div>
          <div className={`row ${styles.popUpProductReview}`}>
            <div className={`col-5 ${styles.popUpPhoto}`}>
              <img className={styles.image} src={productData.image} alt='furniture' />
            </div>
            <div className={`col-7 ${styles.popUpDetails}`}>
              <div className={styles.popUpStars}>
                <ProductRating {...productData} />
              </div>
              <div className={styles.prices}>
                {productData.oldPrice ? (
                  <Button noHover className={styles.btnOldPrice} variant='small'>
                    $ {productData.oldPrice}
                  </Button>
                ) : (
                  <></>
                )}
                <Button className={styles.btnPrice} noHover variant='small'>
                  $ {productData.price}
                </Button>
              </div>
              <div className={styles.popUpDescription}>
                <p className={styles.description}>{productData.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductPopUp.propTypes = {
  popUpOpen: PropTypes.bool,
  productData: PropTypes.object,
};

export default ProductPopUp;
