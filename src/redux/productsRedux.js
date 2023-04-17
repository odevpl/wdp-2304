/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const addUserStars = payload => ({ type: ADD_USER_STARS, payload });

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const ADD_USER_STARS = createActionName('ADD_USER_STARS');

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_USER_STARS:
      return statePart.map(product =>
        product.id === action.payload.id
          ? { ...product, myStars: action.payload.clickedStars }
          : product
      );
    default:
      return statePart;
  }
}
