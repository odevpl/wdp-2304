import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeSelected, toggleFavorite } from '../../../redux/productsRedux';
import styles from './StickyBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExchangeAlt, faHeart } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const StickyBar = ({ products }) => {
  const dispatch = useDispatch();

  const handleProductRemove = productId => () => {
    dispatch(removeSelected(productId));
  };

  const handleFavorite = id => e => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  return (
    <div className={styles.stickyBar}>
      {products.map(product => (
        <div key={product.id}>
          <div
            className={styles.stickyBarImageContainer}
            onClick={handleProductRemove(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <div className={styles.stickyBarImageOverlay}>
              <FontAwesomeIcon icon={faTimes} className={styles.stickyBarImageIcon} />
            </div>
          </div>
          <div className={styles.descryption}>
            <div>
              <div className={styles.name}>{product.name}</div>
              <div className={styles.price}>Price: $ {product.price}.00</div>
            </div>
            <div>
              <Button
                variant='outline'
                onClick={handleFavorite(product.id)}
                className={product.favorite && styles.active}
              >
                <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      ))}
      {products && products.length > 0 && (
        <Button variant='outline' className={styles.compare_button}>
          <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
        </Button>
      )}
    </div>
  );
};

StickyBar.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
export default StickyBar;
