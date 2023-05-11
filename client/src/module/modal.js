import { createAction, handleActions } from 'redux-actions';
import { initialData } from '../data/initialData';

const OPEN = 'modal/OPEN';
const CHANGE = 'modal/CHANGE';

export const open = createAction(OPEN, (isOpen) => isOpen);
export const change = createAction(CHANGE, (content) => content);

const modal = handleActions(
  {
    [OPEN]: (state, { payload: isOpen }) => ({
      ...state,
      isOpen,
    }),
    [CHANGE]: (state, { payload: content }) => ({
      ...state,
      content,
    }),
  },
  initialData.modal
);

export default modal;
