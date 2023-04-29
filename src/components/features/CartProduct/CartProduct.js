import React from 'react';
import styles from './CartProduct.module.scss';
import propTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../../../redux/cartRedux';

const CartProduct = ({ category, image, name, price, id, quantity }) => {
  const dispatch = useDispatch();

  const handleRemoveProduct = e => {
    e.preventDefault();
    dispatch(removeProduct(id));
  };

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.content}>
          <div className={`col-2 ${styles.xMark}`}>
            <Button
              onClick={handleRemoveProduct}
              variant='outline'
              className={styles.ico}
            >
              X
            </Button>
            <div className={styles.miniature}>
              <img alt={category} src={`${process.env.PUBLIC_URL}${image}`} />
            </div>
          </div>

          <div className={`col-4 ${styles.apply}`}>{name}</div>
          <div className={`col-2 ${styles.price}`}>${price}.00</div>
          <div className={`col-2`}>{quantity}</div>
          <div className={`col-2 ${styles.total}`}>$30.00</div>
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  name: propTypes.string,
  category: propTypes.string,
  image: propTypes.string,
  price: propTypes.number,
  quantity: propTypes.number,
  total: propTypes.number,
  id: propTypes.string,
};

export default CartProduct;
