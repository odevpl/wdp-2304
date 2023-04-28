import { connect } from 'react-redux';
import FurnitureGallery from './FurnitureGallery.js';
import { getAll, getAllProducts } from '../../../redux/galleryRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getAllProducts(state),
});

export default connect(mapStateToProps)(FurnitureGallery);
