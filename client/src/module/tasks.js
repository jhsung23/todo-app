import { createAction, handleActions } from 'redux-actions';
import { initialData } from '../data/initialData';

const INSERT = 'tasks/INSERT';
const STAR = 'tasks/STAR';
const TOGGLE = 'tasks/TOGGLE';
const REMOVE = 'tasks/REMOVE';

let id = 8;
export const insert = createAction(INSERT, ({ name, content, tag }) => ({
  id: id++,
  name: name,
  content: content,
  isDone: false,
  isImportant: false,
  tag: tag,
}));
export const star = createAction(STAR, (id) => id);
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const task = handleActions(
  {
    [INSERT]: (state, { payload: task }) => [...state, task],
    [REMOVE]: (state, { payload: id }) => state.filter((task) => task.id !== id),
    [STAR]: (state, { payload: id }) =>
      state.map((task) => (task.id === id ? { ...task, isImportant: !task.isImportant } : task)),
    [TOGGLE]: (state, { payload: id }) =>
      state.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)),
  },
  initialData.tasks
);

export default task;
