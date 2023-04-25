import React from 'react';
import styles from './CartProduct.module.scss';
import propTypes from 'prop-types';

const CartProduct = ({ ...props }) => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.content}>
          <div className={`col-2 ${styles.xMark}`}>
            <div className={styles.ico}>x</div>
            <div className={styles.miniature}></div>
          </div>

          <div className={`col-4 ${styles.apply}`}>{props.name}</div>
          <div className={`col-2 ${styles.price}`}>${props.price}.00</div>
          <div className={`col-2`}>1</div>
          <div className={`col-2 ${styles.total}`}>$30.00</div>
        </div>
      </div>
    </div>
  );
};

CartProduct.propTypes = {
  name: propTypes.string,
  price: propTypes.number,
  quantity: propTypes.number,
  total: propTypes.number,
};

export default CartProduct;
