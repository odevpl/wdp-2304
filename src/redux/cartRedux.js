/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;
export const getAllProducts = state => state.products;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_PRODUCT = createActionName('ADD_PRODUCT');
const REMOVE_PRODUCT = createActionName('REMOVE_PRODUCT');
const REMOVE_ALL_PRODUCTS = createActionName('REMOVE_ALL_PRODUCTS');
const INCREASE_PRODUCT_QUANTITY = createActionName('INCREASE_PRODUCT_QUANTITY');

/* action creators */
export const addProduct = payload => ({ payload, type: ADD_PRODUCT });
export const removeProduct = payload => ({ payload, type: REMOVE_PRODUCT });
export const removeAllProducts = () => ({ type: REMOVE_ALL_PRODUCTS });
export const increaseProductQuantity = payload => ({
  payload,
  type: INCREASE_PRODUCT_QUANTITY,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_PRODUCT: {
      const existingProduct = statePart.products.find(
        product => product.id === action.payload.id
      );
      if (existingProduct) {
        return {
          ...statePart,
          products: statePart.products.map(product =>
            product.id === action.payload.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        };
      } else {
        return {
          ...statePart,
          products: [...statePart.products, { ...action.payload, quantity: 1 }],
        };
      }
    }
    case REMOVE_PRODUCT: {
      return {
        ...statePart,
        products: statePart.products.filter(product => product.id !== action.payload),
      };
    }
    case REMOVE_ALL_PRODUCTS: {
      return {
        ...statePart,
        products: [],
      };
    }
    case INCREASE_PRODUCT_QUANTITY: {
      return {
        ...statePart,
        products: statePart.products.map(product =>
          product.id === action.payload.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    }
    default:
      return statePart;
  }
}
