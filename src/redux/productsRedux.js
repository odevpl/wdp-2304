/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);


//actions
const reducerName = 'products';
const createActionName = actionName => `app/${reducerName}/${actionName}`;
const ADD_SELECTED = createActionName('ADD_SELECTED');
const REMOVE_SELECTED = createActionName('REMOVE_SELECTED');
const TOGGLE_FAVORITE = createActionName('TOGGLE_FAVORITE');

/* action creators */
export const addSelected = payload => ({ payload, type: ADD_SELECTED });
export const removeSelected = payload => ({ payload, type: REMOVE_SELECTED });
export const toggleFavorite = payload => ({ payload, type: TOGGLE_FAVORITE });
export const getSelected = ({ products }) =>
  products.filter(item => item.isSelected === true);

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, favorite: !product.favorite }
          : product
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
