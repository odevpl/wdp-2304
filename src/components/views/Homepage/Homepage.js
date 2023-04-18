import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import SectionBrands from '../../features/SectionBrands/SectionBrands';
import SectionPromotions from '../../features/SectionPromotions/SectionPromotions';
import ChatBot from '../../features/ChatBot/ChatBot';
import FurnitureGallery from '../../features/Furniture Gallery/FurnitureGalleryContainer';
import ClientFeedback from '../../features/ClientFeedback/ClientFeedback';
import LatestBlog from '../../features/LatestBlog/LatestBlog';
import Promoted from '../../features/Promoted/Promoted';

const Homepage = () => (
  <div className={styles.root}>
    <Promoted />
    <FeatureBoxes />
    <SectionPromotions />
    <NewFurniture />
    <FurnitureGallery />
    <LatestBlog />
    <SectionBrands />
    <ChatBot />
    <ClientFeedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
