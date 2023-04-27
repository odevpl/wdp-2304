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
    mouseDrag: false,
    nav: false,
    container: '.cardContent',
    controlsText: '<>',
    gutter: 20,
    responsive: {
      0: {
        items: 1,
        slideBy: 1,
      },
      576: {
        items: 2,
        slideBy: 2,
      },
      768: {
        items: 3,
        slideBy: 3,
      },
      992: {
        items: 4,
        slideBy: 4,
      },
      1200: {
        items: 6,
        slideBy: 6,
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
