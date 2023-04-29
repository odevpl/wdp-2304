import React from 'react';
import styles from './Promoted.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import ProductBoxDescription from '../../common/ProductBoxDescription/ProductBoxDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { getPromoted } from '../../../redux/promotedRedux';
import Button from '../../common/Button/Button';
import { Swipeable } from '../Swipeable/Swipeable';
import { addProduct } from '../../../redux/cartRedux';

const Promoted = () => {
  const products = useSelector(getAll);
  const Promoted = useSelector(getPromoted);
  const dispatch = useDispatch();

  const handleAddToCart = e => {
    e.preventDefault();
    dispatch(addProduct(product));
  };

  const product = products.find(product => product.id === 'aenean-ru-bristique-5'); // na razie jeden konkretny produkt bo task dotyczył tylko wyglądu

  return (
    <div className={`container ${styles.root}`}>
      <div className='row'>
        <div className={`col-6 col-lg-4 d-none d-md-block ${styles.card}`}>
          <div className={styles.imageContainer}>
            <img src={product.image} alt={product.name}></img>
            <ProductBoxDescription
              showEyeButton
              compare={product.compare}
              price={product.price}
              name={product.name}
              stars={product.stars}
              id={product.id}
              userStars={product.userStars}
            />
            <div className={styles.topBar}>
              <span className={styles.promoted}>HOT DEALS</span>
              <div className={styles.dotsContainer}>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
                <span className={styles.dot}></span>
              </div>
            </div>
            <div className={styles.addToCartContainer}>
              <Button
                variant='small'
                onClick={handleAddToCart}
                className={styles.btnPrimary}
              >
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
              <div className={styles.dotsTextContainer}>
                <span className={styles.dotText}>
                  25 <span>DAYS</span>
                </span>
                <span className={styles.dotText}>
                  10 <span>HRS</span>
                </span>
                <span className={styles.dotText}>
                  45 <span>MINS</span>
                </span>
                <span className={styles.dotText}>
                  30 <span>SECS</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 col-lg-8 col-12'>
          <div className={styles.slider}>
            <img src={Promoted.image} alt={Promoted.imageTitle}></img>
            <div className={styles.sliderContainer}>
              <h4 className={styles.title}>
                {Promoted.dealTitle} <span>{Promoted.dealTitleHighlited}</span>
              </h4>
              <p className={styles.description}>{Promoted.dealDescription}</p>
              <Button variant='light' className={styles.btnShopNow}>
                SHOP NOW
              </Button>
            </div>
            <div className={styles.buttonContainer}>
              <Button variant='small' className={styles.btnSecondary}>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </Button>
              <Button variant='small' className={styles.btnSecondary}>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promoted;
