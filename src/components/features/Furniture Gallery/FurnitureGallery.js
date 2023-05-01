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
  state = {
    selectedCategory: 'featured',
    selectedImage: this.props.products[0],
    fadeCategory: false,
    fadeImage: false,
  };

  handleCategoryChange(categoryId, selectedCategory) {
    this.setState({ fadeCategory: true });
    setTimeout(() => {
      this.setState({ selectedCategory: categoryId });
      this.setState({ selectedImage: selectedCategory[0] });
      setTimeout(() => {
        this.setState({ fadeCategory: false });
      }, 0);
    }, 500);
  }

  handleImageChange(product) {
    this.setState({ fadeImage: true });
    setTimeout(() => {
      this.setState({ selectedImage: product });
      setTimeout(() => {
        this.setState({ fadeImage: false });
      }, 0);
    }, 500);
  }

  handleAddToCart = selectedImage => {
    this.props.addProduct(selectedImage);
  };

  render() {
    const { categories, products } = this.props;
    const { selectedCategory, selectedImage, fadeImage, fadeCategory } = this.state;

    // Ustawienia dla slidera
    const settings = {
      container: '.sliderBox',
      items: 5,
      mouseDrag: true,
      nav: false,
      startIndex: 2,
      controlsText: '<>',
      loop: false,
      rewind: true,
    };

    const categoryProducts = selectedCategory => {
      let selectedProducts = products;

      switch (selectedCategory) {
        case 'topRated':
          selectedProducts = selectedProducts.filter(product => product.stars >= 4);
          break;
        case 'featured':
          selectedProducts = selectedProducts.filter(
            product => product.featured === true
          );
          break;
        case 'saleOff':
          selectedProducts = selectedProducts.filter(product => product.oldPrice);
          break;
        case 'topSeller':
          selectedProducts = selectedProducts.filter(
            product => product.topSeller === true
          );
          break;
        default:
          break;
      }

      return selectedProducts;
    };

    const productsByCategory = categoryProducts(selectedCategory);

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
                      <li
                        key={category.id}
                        className={`${
                          category.id === selectedCategory ? styles.activeCategory : ''
                        }`}
                        onClick={() =>
                          this.handleCategoryChange(category.id, productsByCategory)
                        }
                      >
                        {category.name}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${fadeCategory ? styles.fadeOut : styles.fadeIn}`}>
                  <div className={styles.imageBox}>
                    <img
                      className={`${fadeImage ? styles.fadeOut : styles.fadeIn}`}
                      src={`${process.env.PUBLIC_URL}${selectedImage.image}`}
                      alt={selectedImage.category}
                    />
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
                      <Button
                        noHover
                        variant='outline'
                        onClick={() => this.handleAddToCart(selectedImage)}
                        className={styles.iconButton}
                      >
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <div className={styles.iconCloud}>Add To Cart</div>
                      </Button>
                    </div>
                    <div className={styles.content}>
                      <div className={styles.triangle}></div>
                      <div className={styles.triangle2}></div>
                      <ProductRating
                        id={selectedImage.id}
                        stars={selectedImage.stars}
                        name={selectedImage.name}
                        gallery={true}
                        noPadding
                      />
                    </div>
                    <div className={styles.cirkle}>
                      {selectedImage.oldPrice && <div>$ {selectedImage.oldPrice}</div>}
                      <div>$ {selectedImage.price}</div>
                    </div>
                  </div>
                  <div className={`sliderBox ${styles.sliderBox}`}>
                    <TinySlider settings={settings}>
                      {productsByCategory.map((product, index) => (
                        <div className={styles.imageBox} key={product.id}>
                          <img
                            className={`${
                              (index === 0 && !selectedImage) ||
                              product === selectedImage
                                ? 'activeSlide'
                                : ''
                            }`}
                            onClick={() => this.handleImageChange(product)}
                            src={`${process.env.PUBLIC_URL}${product.image}`}
                            alt={product.category}
                          />
                        </div>
                      ))}
                    </TinySlider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`right-section col-6 d-none d-md-block ${styles.rightSection}`}
            >
              <div className={styles.image}>
                <img
                  src={`${process.env.PUBLIC_URL}${products[18].image}`}
                  alt={products[18].category}
                />
                <div className={styles.sale}>
                  from <span className={styles.price}>$ {products[18].price}</span>
                </div>
                <div className={styles.name}>{products[18].name}</div>
                <Button className={styles.button}>shop now</Button>
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
      userStars: PropTypes.number,
    })
  ),
  addProduct: PropTypes.func,
};

FurnitureGallery.defaultProps = {
  categories: [],
  products: [],
};

export default FurnitureGallery;
