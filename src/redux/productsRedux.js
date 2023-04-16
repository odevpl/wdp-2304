/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

//actions
const reducerName = 'products';
const createActionName = actionName => `app/${reducerName}/${actionName}`;
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');

/* action creators */
export const toggleFavorite = payload => ({ payload, type: TOGGLE_FAVORITE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
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
