import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeSelected } from '../../../redux/productsRedux';
import styles from './StickyBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const StickyBar = ({ products }) => {
  const dispatch = useDispatch();

  const handleProductRemove = productId => () => {
    dispatch(removeSelected(productId));
  };

  return (
    <div className={styles.stickyBar}>
      {products.map(product => (
        <>
          <div
            key={product.id}
            className={styles.stickyBarImageContainer}
            onClick={handleProductRemove(product.id)}
          >
            <img src={product.image} alt={product.name} />
            <div className={styles.stickyBarImageOverlay}>
              <FontAwesomeIcon icon={faTimes} className={styles.stickyBarImageIcon} />
            </div>
          </div>
          <Button variant='outline' className={styles.compare_button}>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </>
      ))}
    </div>
  );
};

StickyBar.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object),
};
export default StickyBar;
