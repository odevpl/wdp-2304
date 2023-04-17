/* selectors */
export const getAll = ({ categories }) => categories;
export const getCount = ({ categories }) => categories.length;
export const getCategoryId = (statePart, categoryId) => {
  statePart.categories.find(category => category.id === categoryId);
};

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
