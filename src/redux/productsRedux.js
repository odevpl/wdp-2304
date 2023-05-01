/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const addUserStars = payload => ({ type: ADD_USER_STARS, payload });
export const getProductById = ({ products }, productId) =>
  products.find(product => `${product.category}-${product.id}` === productId);
export const getProductByCategory = ({ products }, productCategory) =>
  products.filter(product => product.category === productCategory);
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const reducerName = 'products';
const createActionName = actionName => `app/${reducerName}/${actionName}`;
const ADD_USER_STARS = createActionName('ADD_USER_STARS');
const ADD_SELECTED = createActionName('ADD_SELECTED');
const REMOVE_SELECTED = createActionName('REMOVE_SELECTED');
const ADD_TO_FAVORITE = createActionName('ADD_TO_FAVORITE');
const REMOVE_FROM_FAVORITE = createActionName('REMOVE_FROM_FAVORITE');

/* action creators */
export const addSelected = payload => ({ payload, type: ADD_SELECTED });
export const removeSelected = payload => ({ payload, type: REMOVE_SELECTED });
export const addToFavorite = payload => ({ payload, type: ADD_TO_FAVORITE });
export const removeFromFavorite = payload => ({ payload, type: REMOVE_FROM_FAVORITE });
export const getSelected = ({ products }) =>
  products.filter(item => item.isSelected === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, userStars: action.payload.userStars }
          : product
      );
    case ADD_TO_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, favorite: true } : product
      );
    case REMOVE_FROM_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, favorite: false } : product
      );
    case ADD_SELECTED:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, isSelected: true } : product
      );
    case REMOVE_SELECTED:
      return statePart.map(product =>
        product.id === action.payload ? { ...product, isSelected: false } : product
      );
    default:
      return statePart;
  }
}
