import React from 'react';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ category, image, promo, oldPrice, showButtons }) => {
  return (
    <div className={styles.photo}>
      <img alt={category} src={`${process.env.PUBLIC_URL}${image}`} />
      {promo && <div className={styles.sale}>{promo}</div>}
      {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
      {showButtons && (
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      )}
    </div>
  );
};
ProductCard.propTypes = {
  name: PropTypes.string,
  promo: PropTypes.string,
  image: PropTypes.string,
  category: PropTypes.string,
  oldPrice: PropTypes.number,
  showButtons: PropTypes.bool,
};
export default ProductCard;
