import { createAction, handleActions } from 'redux-actions';
import { initialData } from '../data/initialData';

const ADD = 'tags/ADD';

export const add = createAction(ADD, (name) => name);

const tags = handleActions(
  {
    [ADD]: (state, { payload: tagName }) => ({
      name: tagName,
    }),
  },
  initialData.tags
);

export default tags;
