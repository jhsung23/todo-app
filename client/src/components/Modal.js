import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { FiChevronsRight } from 'react-icons/fi';
import { change } from '../module/modal';
import TaskInput from '../components/TaskInput';
import TaskContent from '../components/TaskContent';

const Aside = styled.aside`
  width: 330px;
  height: 100vh;
  background-color: #f4f4f4;
  transition: transform 0.3s ease;
  position: absolute;
  right: 0;
  transform: translateX(100%);
  z-index: 1000;

  & #close-button {
    font-size: 25px;
    color: #909090;
    margin-top: 15px;
    margin-left: 15px;
    cursor: pointer;
  }

  &.open {
    transform: translateX(0);
  }
`;

const Modal = () => {
  const { modalContent } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(change(''));
  };

  return (
    <Aside className={modalContent ? 'open' : undefined}>
      <FiChevronsRight id="close-button" onClick={handleClickClose} />
      {modalContent !== '' ? modalContent === 'input' ? <TaskInput /> : <TaskContent /> : undefined}
    </Aside>
  );
};

export default Modal;
