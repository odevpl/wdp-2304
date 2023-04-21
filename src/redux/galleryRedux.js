/* selectors */
export const getAll = ({ galleryCategories }) => galleryCategories;
export const getAllProducts = ({ products }) => products;
export const getCount = ({ galleryCategories }) => galleryCategories.length;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
