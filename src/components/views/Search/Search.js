import React from 'react';

import styles from './Search.module.scss';
import NewFurniture from '../../features/NewFurniture/NewFurniture';
import { useSelector } from 'react-redux';
import { getAll as getAllCategories } from '../../../redux/categoriesRedux';
import { getAll as getAllProducts } from '../../../redux/productsRedux';

const Search = () => {
  const categories = useSelector(getAllCategories);
  const products = useSelector(getAllProducts);

  return (
    <div className={styles.root}>
      <NewFurniture categories={categories} products={products} />
    </div>
  );
};

export default Search;
