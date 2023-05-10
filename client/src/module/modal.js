import { createAction, handleActions } from 'redux-actions';
import { initialData } from '../data/initialData';

const CHANGE = 'modal/CHANGE';

export const change = createAction(CHANGE, (content) => content);

const modal = handleActions(
  {
    [CHANGE]: (state, { payload: content }) => ({
      ...state,
      modalContent: content,
    }),
  },
  initialData
);

export default modal;
