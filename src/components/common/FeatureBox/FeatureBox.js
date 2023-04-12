import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './FeatureBox.module.scss';

const FeatureBox = ({ active, icon, children, onMouseEnter, onMouseLeave }) => (
  <div
    className={styles.root + (active ? ' ' + styles.active : '')}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {icon && (
      <div className={styles.iconWrapper}>
        <FontAwesomeIcon className={styles.icon} icon={icon} />
      </div>
    )}
    <div className={styles.content}>{children}</div>
  </div>
);
FeatureBox.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.object,
  active: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};

export default FeatureBox;
