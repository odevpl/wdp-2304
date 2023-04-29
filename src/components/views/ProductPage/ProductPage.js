import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductByCategory, getProductById } from '../../../redux/productsRedux';
import TinySlider from 'tiny-slider-react';
import 'tiny-slider/dist/tiny-slider.css';
import './ProductPageSlider.scss';
import ProductRating from '../../features/ProductRating/ProductRating';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faGooglePlusG,
  faLinkedin,
  faPinterestP,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import { addProduct } from '../../../redux/cartRedux';

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();
  const { ...product } = useSelector(state => getProductById(state, productId));
  const products = useSelector(state => getProductByCategory(state, product.category));
  const dispatch = useDispatch();

  const settings = {
    container: '.productPageSliderBox',
    items: 5,
    lazyload: true,
    nav: false,
    mouseDrag: true,
    controlsText: '<>',
  };

  function handleDecrease() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  function handleIncrease() {
    setQuantity(quantity + 1);
  }

  const handleAddToCart = e => {
    e.preventDefault();
    dispatch(addProduct(product));
  };

  return (
    <div className={styles.root}>
      <div className={`container ${styles.container}`}>
        <div className='row'>
          <div className={`col-md-5 ${styles.leftBox}`}>
            <div className={styles.image}>
              <img
                alt={product.category}
                src={`${process.env.PUBLIC_URL}${product.image}`}
              />
            </div>
            <div className={`productPageSliderBox ${styles.sliderBox}`}>
              <TinySlider settings={settings}>
                {products.map(product => (
                  <div
                    className={styles.imageBox}
                    key={product.id}
                    style={{ position: 'relative' }}
                  >
                    <img src={product.image} alt={product.category} />
                  </div>
                ))}
              </TinySlider>
            </div>
          </div>
          <div className={`col-md-7 ${styles.rightBox}`}>
            <div className={styles.firstRow}>
              <div className={styles.leftSide}>
                <div className={styles.name}>
                  <h2>{product.name}</h2>
                </div>
                <div className={styles.stars}>
                  <ProductRating
                    noPadding
                    id={product.id}
                    stars={product.stars}
                    userStars={product.userStars}
                  />
                  <span className={styles.reviewCount}>(0 reviews)</span>
                  <Button className={styles.addReview}>Add Your Review</Button>
                </div>
              </div>
              <div className={styles.rightSide}>
                <Button className={styles.button}>&lt;</Button>
                <Button className={styles.button}>&gt;</Button>
              </div>
            </div>
            <div className={styles.secondRow}>
              {product.oldPrice && (
                <div className={styles.oldPrice}>$ {product.oldPrice}</div>
              )}
              <div className={styles.price}>$ {product.price}</div>
            </div>
            <div className={styles.thirdRow}>
              <div className={styles.firstColumn}>
                <Button onClick={handleAddToCart}>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  Add To Cart
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
                <Button>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Button>
              </div>
              <form className={styles.form}>
                <div className={`form-group ${styles.formGroup}`}>
                  <div className={`input-group ${styles.inputGroup}`}>
                    <label htmlFor='quantity' className={`quantity ${styles.quantity}`}>
                      Quantity:
                    </label>
                    <input
                      type='number'
                      className={`form-control ${styles.input}`}
                      id='quantity'
                      value={quantity}
                      onChange={event => setQuantity(parseInt(event.target.value))}
                    />
                    <button
                      type='button'
                      className={`btn btn-outline-secondary ${styles.button}`}
                      onClick={handleDecrease}
                    >
                      -
                    </button>
                    <button
                      type='button'
                      className={`btn btn-outline-secondary ${styles.button}`}
                      onClick={handleIncrease}
                    >
                      +
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className={styles.fourthRow}>
              <h2>Quick Overview</h2>
              <p>{product.description}</p>
            </div>
            <div className={styles.fifthRow}>
              <div>
                <span className={styles.title}>Availability: </span>
                {product.availability ? (
                  <span className={styles.subtitle}>in Stock</span>
                ) : (
                  <span className={styles.subtitle}>no Stock</span>
                )}
              </div>
              <div>
                <span className={styles.title}>Category: </span>
                <span className={styles.subtitle}>{product.category}</span>
              </div>
            </div>
            <div className={styles.sixth}>
              <Button>
                <FontAwesomeIcon icon={faFacebook} />
                Share
              </Button>
              <Button>
                <FontAwesomeIcon className={styles.google} icon={faGooglePlusG} />
                Google +
              </Button>
              <Button>
                <FontAwesomeIcon className={styles.twitter} icon={faTwitter} />
                Tweet
              </Button>
              <Button>
                <FontAwesomeIcon className={styles.pinterest} icon={faPinterestP} />
                Pinterest
              </Button>
              <Button>
                <FontAwesomeIcon className={styles.linkedin} icon={faLinkedin} />
                Linkedin
              </Button>
            </div>
          </div>
        </div>
      </div>
      <NewFurniture variant='productPage' />
    </div>
  );
};

ProductPage.propTypes = {
  productId: PropTypes.string,
};

export default ProductPage;
