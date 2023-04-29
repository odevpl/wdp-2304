import { connect } from 'react-redux';
import FurnitureGallery from './FurnitureGallery.js';
import { getAll, getAllProducts } from '../../../redux/galleryRedux.js';
import { addProduct } from '../../../redux/cartRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getAllProducts(state),
});

const mapDispatchToProps = dispatch => ({
  addProduct: product => dispatch(addProduct(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FurnitureGallery);
