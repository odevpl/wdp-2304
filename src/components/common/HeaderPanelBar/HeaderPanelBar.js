import React from 'react';
import styles from './HeaderPanelBar.module.scss';
import PropTypes from 'prop-types';

const HeaderPanelBar = ({ title }) => {
  return (
    <div className={`${styles.heading}`}>
      <h3>{title}</h3>
    </div>
  );
};

HeaderPanelBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderPanelBar;
