/* selectors */
export const getAll = ({ galleryCategories }) => galleryCategories;
export const getAllProducts = ({ products }) => products;
export const getCount = ({ galleryCategories }) => galleryCategories.length;

const createActionName = actionName => `app/galleryProducts/${actionName}`;

const UPDATE_GALLERY_PRODUCT_RATE = createActionName('UPDATE_GALLERY_PRODUCT_RATE');

export const updateGalleryProductRate = payload => ({
  type: UPDATE_GALLERY_PRODUCT_RATE,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case UPDATE_GALLERY_PRODUCT_RATE:
      return statePart.map(product =>
        product.id === action.payload.id
          ? {
              ...product,
              userStars: action.payload.userStars,
            }
          : product
      );
    default:
      return statePart;
  }
}
