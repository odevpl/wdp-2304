/* selectors */
export const getAll = state => state.feedbacks;
export const getCount = ({ feedbacks }) => feedbacks.length;
export const getAllFeedbacks = ({ feedbacks }) => feedbacks;

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
