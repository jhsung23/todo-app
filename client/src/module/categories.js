import { createAction, handleActions } from 'redux-actions';
import { initialData } from '../data/initialData';

const ADD = 'categories/ADD';

export const add = createAction(ADD, (name) => name);

const categories = handleActions(
  {
    [ADD]: (state, { payload: categoryName }) => ({
      name: categoryName,
    }),
  },
  initialData.categories
);

export default categories;
