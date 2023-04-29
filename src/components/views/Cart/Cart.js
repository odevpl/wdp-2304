import React from 'react';
import styles from './Cart.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import CartUpdateBar from '../../features/CartUpdateBar/CartUpdateBar';
import CartProduct from '../../features/CartProduct/CartProduct';
import CartTotals from '../../features/CartTotals/CartTotals';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/cartRedux';

const Cart = () => {
  const cartProducts = useSelector(getAll);

  return (
    <div className={styles.root}>
      <div className={styles.upperBar}>
        <div className={`col-12 col-md-9`}>Cart</div>
        <div className={`col-12 col-md-3 ${styles.icon}`}>
          <FontAwesomeIcon icon={faHouse} />
          <span>&nbsp;&gt;&nbsp;Cart</span>
        </div>
      </div>
      <div className={`container`}>
        <div className={styles.cartBar}>
          <div className={`col-2`}></div>
          <div className={`col-4`}>PRODUCT</div>
          <div className={`col-2 ${styles.center}`}>PRICE</div>
          <div className={`col-2 ${styles.center}`}>QUANTITY</div>
          <div className={`col-2 ${styles.center}`}>TOTAL</div>
        </div>
        {cartProducts.map(product => (
          <CartProduct key={product.id} {...product} />
        ))}
        <CartUpdateBar />
        <CartTotals />
      </div>
    </div>
  );
};

export default Cart;
