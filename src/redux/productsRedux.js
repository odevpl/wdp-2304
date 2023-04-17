/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const addUserStars = payload => ({ type: ADD_USER_STARS, payload });

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const reducerName = 'products';
const createActionName = actionName => `app/${reducerName}/${actionName}`;
const ADD_USER_STARS = createActionName('ADD_USER_STARS');
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');

/* action creators */
export const toggleFavorite = payload => ({ payload, type: TOGGLE_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, myStars: action.payload.clickedStars }
          : product
      );
    case TOGGLE_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
      );
    default:
      return statePart;
  }
}
