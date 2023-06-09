import { combineReducers, createStore } from 'redux';
import initialState from './initialState';

import cartReducer from './cartRedux';
import categoriesReducer from './categoriesRedux';
import productsReducer from './productsRedux';
import brandsReducer from './brandsRedux';
import screenReducer from './screenSizeRedux';
import promotionsReducer from './promotionsRedux';
import galleryCategoriesReducer from './galleryRedux';
import feedbackReducer from './feedbackRedux';
import blogReducer from './blogRedux';
import promotedReducer from './promotedRedux';
import logOnUserReducer from './logOnUserRedux';

// define reducers
const reducers = {
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  brands: brandsReducer,
  screenMode: screenReducer,
  promotions: promotionsReducer,
  galleryCategories: galleryCategoriesReducer,
  feedbacks: feedbackReducer,
  blog: blogReducer,
  promoted: promotedReducer,
  logOnUser: logOnUserReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
