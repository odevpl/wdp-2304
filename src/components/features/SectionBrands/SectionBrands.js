import React from 'react';
import styles from './SectionBrands.module.scss';
import { getBrands } from '../../../redux/brandsRedux';
import { useSelector } from 'react-redux';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import './SectionBrandsSlider.scss';

const SectionBrands = () => {
  const brands = useSelector(state => getBrands(state));

  const brandsArray = Object.values(brands);

  const settings = {
    lazyload: true,
    mouseDrag: true,
    nav: false,
    container: '.cardContent',
    controlsText: '<>',
    gutter: 20,
    responsive: {
      576: {
        slideBy: 2,
        items: 2,
      },
      768: {
        slideBy: 3,
        items: 3,
      },
      992: {
        slideBy: 6,
        items: 6,
      },
    },
  };

  return (
    <div className={`container ${styles.root}`}>
      <div className={styles.card}>
        <div className={`cardContent ${styles.cardContent}`}>
          <TinySlider settings={settings}>
            {brandsArray.map(brand => (
              <div className={styles.brandImage} key={brand}>
                <img src={brand} alt='brand' />
              </div>
            ))}
          </TinySlider>
        </div>
      </div>
    </div>
  );
};

export default SectionBrands;
