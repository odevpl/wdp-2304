import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import ProductRating from '../../features/ProductRating/ProductRating';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSelected } from '../../../redux/productsRedux';
import { useSelector } from 'react-redux';
import { removeSelected } from '../../../redux/productsRedux';
import { getSelected } from '../../../redux/productsRedux';

import { toggleFavorite } from '../../../redux/productsRedux';
import ProductPopUp from '../ProductPopUp/ProductPopUp';

const ProductBox = props => {
  const {
    id,
    name,
    price,
    promo,
    stars,
    userStars,
    favorite,
    compare,
    image,
    category,
    oldPrice,
    isSelected,
  } = props;
  const dispatch = useDispatch();

  const handleFavorite = e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  const [popUp, setPopUp] = useState(false);

  const openPopUp = e => {
    e.preventDefault();
    setPopUp(true);
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
      {popUp && <ProductPopUp popUpOpen={setPopUp} productData={props}></ProductPopUp>}
      <div className={styles.photo}>
        <Link to={`/product/${`${category}-${id}`}`}>
          <img alt={category} src={`${process.env.PUBLIC_URL}${image}`} />
        </Link>
        {promo && <div className={styles.sale}>{promo}</div>}
        {oldPrice && <div className={styles.oldPrice}>$ {oldPrice}</div>}
        <div className={styles.buttons}>
          <Button onClick={openPopUp} variant='small'>
            Quick View
          </Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <ProductRating id={id} stars={stars} userStars={userStars} name={name} />
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline' className={favorite && styles.active} onClick={handleFavorite}>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            variant='outline'
            className={compare && styles.active}
            onClick={handleSelectedProduct}
          >
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
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  userStars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  image: PropTypes.string,
  category: PropTypes.string,
  oldPrice: PropTypes.number,
  isFavorite: PropTypes.bool,
  isSelected: PropTypes.bool,
};

export default ProductBox;
