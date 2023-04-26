import React from 'react';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className={styles.root}>
      <div className={`container`}>
        <div className={styles.banner}>Banner</div>
        <div className={`${styles.listAndFilters} row`}>
          <div className={`${styles.productListContainer} col-12 col-md-9`}>
            Product List
          </div>
          <div className={`${styles.filters} col-12 col-md-3`}>Filters</div>
        </div>
        <div className={styles.brands}>Brands</div>
      </div>
    </div>
  );
};

export default ProductList;
