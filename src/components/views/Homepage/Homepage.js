import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SectionBrands from '../../features/SectionBrands/SectionBrands';
import SectionPromotions from '../../features/SectionPromotions/SectionPromotions';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <SectionPromotions />
    <NewFurniture />
    <SectionBrands />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
