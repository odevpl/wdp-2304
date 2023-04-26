import { connect } from 'react-redux';

import NewFurniture from './NewFurniture';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { getScreenMode } from '../../../redux/screenSizeRedux';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  screenMode: getScreenMode(state),
});

export default connect(mapStateToProps)(NewFurniture);
