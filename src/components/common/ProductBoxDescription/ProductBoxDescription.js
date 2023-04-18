import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faExchangeAlt,
  faStar,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import ProductRating from '../../features/ProductRating/ProductRating';
import styles from './ProductBoxDescription.module.scss';

const ProductBoxDescription = ({
  favorite,
  compare,
  price,
  name,
  stars,
  showEyeButton,
  id,
  userStars,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <ProductRating id={id} stars={stars} userStars={userStars} name={name} />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          {showEyeButton && (
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}>View</FontAwesomeIcon>
            </Button>
          )}
          <Button variant='outline' className={favorite && styles.active}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={compare && styles.active}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ {price}
          </Button>
        </div>
      </div>
    </div>
  );
};
ProductBoxDescription.propTypes = {
  stars: PropTypes.number,
  name: PropTypes.string,
  favorite: PropTypes.bool.isRequired,
  compare: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  showEyeButton: PropTypes.bool,
  id: PropTypes.number,
  userStars: PropTypes.number,
};
export default ProductBoxDescription;
