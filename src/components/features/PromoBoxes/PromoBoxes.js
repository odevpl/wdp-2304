import React from 'react';
import ProductCard from '../../common/ProductCard/ProductCard';
import styles from './PromoBoxes.module.scss';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/productsRedux';
import ProductBoxDescription from '../../common/ProductBoxDescription/ProductBoxDescription';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const PromoBoxes = () => {
  const products = useSelector(getAll);

  const product = products.find(product => product.id === 'aenean-ru-bristique-5'); // Na razie jeden bo celem jest tylko wygląd bez logiki i slidera ale to jest do zmiany

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-4'>
            <div className={styles.productCardWithOverlay}>
              <ProductCard category={product.category} image={product.image} />
              <div className={styles.blackBar}>
                <div className={styles.hotDeals}>Hot Deals</div>
                <div className={styles.dots}>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                  <span className={styles.dot}></span>
                </div>
              </div>
              <div className={styles.overlay}>
                <button className={styles.addToCart}>Add to Cart</button>
                <div className={styles.circles}>
                  <span className={styles.circle}></span>
                  <span className={styles.circle}></span>
                  <span className={styles.circle}></span>
                  <span className={styles.circle}></span>
                </div>
              </div>
            </div>
            <ProductBoxDescription
              stars={product.stars}
              favorite={product.favorite}
              compare={product.compare}
              price={product.price}
            />
          </div>
          <div className='col-8'>
            <div className={styles.productCardWithOverlay}>
              <ProductCard category={product.category} image={product.image} />
              <div className={styles.transparentBar}>
                <div className={styles.title}>Product Title</div>
                <div className={styles.shopNowContainer}>
                  <button className={styles.shopNowButton}>Shop now</button>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.arrowButton}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button className={styles.arrowButton}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBoxes;
