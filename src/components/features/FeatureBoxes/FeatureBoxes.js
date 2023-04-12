import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';

const FeatureBoxes = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = index => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Link to=''>
              <FeatureBox
                icon={faTruck}
                active={activeIndex === 0}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                <h5>Free shipping</h5>
                <p>All orders</p>
              </FeatureBox>
            </Link>
          </div>
          <div className='col'>
            <Link to=''>
              <FeatureBox
                icon={faHeadphones}
                active={activeIndex === 1}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <h5>24/7 customer</h5>
                <p>support</p>
              </FeatureBox>
            </Link>
          </div>
          <div className='col'>
            <Link to=''>
              <FeatureBox
                icon={faReplyAll}
                active={activeIndex === 2}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <h5>Money back</h5>
                <p>guarantee</p>
              </FeatureBox>
            </Link>
          </div>
          <div className='col'>
            <Link to=''>
              <FeatureBox
                icon={faBullhorn}
                active={activeIndex === 3}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <h5>Member discount</h5>
                <p>First order</p>
              </FeatureBox>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
