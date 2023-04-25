import React from 'react';
import styles from './CartButton.module.scss';
import PropTypes from 'prop-types';

const CartButton = ({ name, className, onClick }) => {
  return (
    <button className={className ? className : styles.button} onClick={onClick}>
      {name}
    </button>
  );
};

CartButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default CartButton;
