import React from 'react';
import styles from './CartUpdateBar.module.scss';
import CartButton from '../../common/CartButton/CartButton';

const CartUpdateBar = () => {
  return (
    <div className={styles.root}>
      <div>
        <div className={styles.cartBar}>
          <div className={`col-2`}>
            <input type='text' placeholder='Coupon code'></input>
          </div>
          <div className={`col-4 ${styles.apply}`}>
            <CartButton name='APPLY COUPON' />
          </div>
          <div className={`col-2`}></div>
          <div className={`col-2`}></div>
          <div className={`col-2 ${styles.update}`}>
            <CartButton name='UPDATE CART' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartUpdateBar;
