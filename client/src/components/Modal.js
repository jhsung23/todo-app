import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { FiChevronsRight } from 'react-icons/fi';
import { open, change } from '../module/modal';
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
  const { modal } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleClickClose = () => {
    setTimeout(() => {
      dispatch(change(''));
    }, 300);
    dispatch(open(false));
  };

  const setContent = () => {
    if (modal.content === 'input') {
      return <TaskInput />;
    }
    if (modal.content !== '') {
      return <TaskContent />;
    }
  };

  return (
    <Aside className={modal.isOpen ? 'open' : undefined}>
      <FiChevronsRight id="close-button" onClick={handleClickClose} />
      {setContent()}
    </Aside>
  );
};

export default Modal;
