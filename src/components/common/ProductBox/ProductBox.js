import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch } from 'react-redux';
import { addSelected } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { removeSelected } from '../../../redux/productsRedux';
import { getSelected } from '../../../redux/productsRedux';

import { toggleFavorite } from '../../../redux/productsRedux';

const ProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  favorite,
  compare,
  image,
  category,
  oldPrice,
  isSelected,
}) => {
  const dispatch = useDispatch();

  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };


  const selectedProducts = useSelector(state => getSelected(state));

  const handleSelectedProduct = e => {
    e.preventDefault();
    if (selectedProducts.length < 4 || isSelected) {
      if (isSelected) {
        dispatch(removeSelected(id));
      } else {
        dispatch(addSelected(id));
      }
    }
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <Link to={`/product/${`${category}-${id}`}`}>
          <img alt={category} src={`${process.env.PUBLIC_URL}${image}`} />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Link to={`/product/${`${category}-${id}`}`}>
          <h5>{name}</h5>
        </Link>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button
            variant='outline'
            className={favorite && styles.active}
            onClick={handleFavorite}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline' className={compare && styles.active} onClick={handleSelectedProduct}>
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

ProductBox.propTypes = {
  children: PropTypes.node,
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  image: PropTypes.string,
  category: PropTypes.string,
  oldPrice: PropTypes.number,
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  isSelected: PropTypes.bool,
};

export default ProductBox;
