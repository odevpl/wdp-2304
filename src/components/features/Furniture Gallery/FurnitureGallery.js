import React from 'react';
import PropTypes from 'prop-types';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import './FurnitureGallerySlider.scss';
import styles from './FurnitureGallery.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faEye,
  faHeart,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import ProductRating from '../ProductRating/ProductRating';

class FurnitureGallery extends React.Component {
  render() {
    const { categories, products } = this.props;

    // Ustawienia dla slidera
    const settings = {
      container: '.sliderBox',
      items: 5,
      lazyload: true,
      nav: false,
      mouseDrag: true,
      controlsText: '<>',
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className='row'>
            <div className='left-section col-12 col-md-6'>
              <div className={styles.panelBar}>
                <div className='row no-gutters align-items-end'>
                  <div className={'col-12 ' + styles.heading}>
                    <h3>Furniture Gallery</h3>
                  </div>
                </div>
              </div>
              <div className={styles.box}>
                <div className={'col ' + styles.menu}>
                  <ul>
                    {categories.map(category => (
                      <li key={category.id}>
                        <Button noHover className={styles.categoryButton}>
                          <a>{category.name}</a>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={styles.imageBox}>
                  <img src={products[0].image} alt={products[0].category} />
                  <div className={styles.iconButtons}>
                    <Button noHover variant='outline' className={styles.iconButton}>
                      <FontAwesomeIcon icon={faHeart} />
                      <div className={styles.iconCloud}>Add To Favorite</div>
                    </Button>
                    <Button noHover variant='outline' className={styles.iconButton}>
                      <FontAwesomeIcon icon={faExchangeAlt} />
                      <div className={styles.iconCloud}>Compare</div>
                    </Button>
                    <Button noHover variant='outline' className={styles.iconButton}>
                      <FontAwesomeIcon icon={faEye} />
                      <div className={styles.iconCloud}>Add To Watch</div>
                    </Button>
                    <Button noHover variant='outline' className={styles.iconButton}>
                      <FontAwesomeIcon icon={faShoppingBasket} />
                      <div className={styles.iconCloud}>Add To Cart</div>
                    </Button>
                  </div>
                  <div className={styles.content}>
                    <h5>{products[0].name}</h5>
                    <div className={styles.triangle}></div>
                    <div className={styles.triangle2}></div>
                    <ProductRating />
                  </div>
                  <div className={styles.cirkle}>
                    {products[1].oldPrice && <div>$ {products[1].oldPrice}</div>}
                    <div>$ {products[1].price}</div>
                  </div>
                </div>
                <div className={`sliderBox ${styles.sliderBox}`}>
                  <TinySlider settings={settings}>
                    {products.map(product => (
                      <div key={product.id} style={{ position: 'relative' }}>
                        <img src={product.image} alt={product.category} />
                      </div>
                    ))}
                  </TinySlider>
                </div>
              </div>
            </div>
            <div className={`right-section col-6 ${styles.rightSection}`}>
              <div className={styles.image}>
                <img src={products[18].image} alt={products[18].category} />
                <div className={styles.sale}>
                  from <span className={styles.price}>$ {products[18].price}</span>
                </div>
                <div className={styles.name}>{products[18].name}</div>
                <Button className={styles.button}>
                  <a>shop now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FurnitureGallery.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
      image: PropTypes.string,
      oldPrice: PropTypes.number,
    })
  ),
};

FurnitureGallery.defaultProps = {
  categories: [],
  products: [],
};

export default FurnitureGallery;
