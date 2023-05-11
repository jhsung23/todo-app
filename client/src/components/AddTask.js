import { styled } from 'styled-components';
import { useDispatch } from 'react-redux';

import { mapItemToComponent } from '../lib/mapItemToComponent';
import { open, change } from '../module/modal';

const Container = styled.div`
  height: 45px;
  width: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  font-size: 1.8rem;
  border-radius: 50%;
  background-color: #6ba4ff;
  color: white;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

const AddTask = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(open(true));
    dispatch(change('input'));
  };

  return <Container onClick={handleClick}>{mapItemToComponent.add}</Container>;
};

export default AddTask;
