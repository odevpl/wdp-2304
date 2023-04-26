import React from 'react';
import styles from './CartTotals.module.scss';
import propTypes from 'prop-types';
import CartButton from '../../common/CartButton/CartButton';
import { useNavigate } from 'react-router-dom';

const CartTotals = ({ ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={`col-6 ${styles.cart}`}>
        <div className={styles.title}>Cart totals</div>
        <div className={styles.subtotal}>
          <div className={`col-5 ${styles.name}`}>Subtotal</div>
          <div className={`col-7 ${styles.price}`}>$25.00</div>
        </div>
        <div className={styles.total}>
          <div className={`col-5 ${styles.name}`}>Total</div>
          <div className={`col-7 ${styles.price}`}>$52.00</div>
        </div>
        <div className={styles.button}>
          <CartButton
            name={'PROCEED TO CHECKOUT'}
            onClick={handleClick}
            className={styles.buttonShape}
          />
        </div>
      </div>
    </div>
  );
};

// CartTotals.propTypes = {
//   subtotal: propTypes.number,
//   total: propTypes.number,
// };

export default CartTotals;
