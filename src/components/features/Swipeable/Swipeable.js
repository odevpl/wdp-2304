import React from 'react';
import PropTypes from 'prop-types';
import { useSwipeable } from 'react-swipeable';
import styles from './Swipeable.module.scss';

const Swipeable = ({ leftAction, rightAction, children }) => {
  const handlers = useSwipeable({
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
    trackMouse: true,
    rotationAngle: 0,
    onSwipedLeft: () => leftAction(),
    onSwipedRight: () => rightAction(),
  });

  return (
    <div className={styles.swipeable}>
      <div {...handlers}> {children} </div>
    </div>
  );
};

Swipeable.propTypes = {
  children: PropTypes.node,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Swipeable;
