import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import { mapItemToComponent } from '../lib/mapItemToComponent';
import { toggle, star } from '../module/task';
import { change } from '../module/modal';

const Container = styled.div`
  width: 98%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 10px 0;
`;

const CheckboxWrapper = styled.div`
  flex-basis: 1;

  & input {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  padding-left: 15px;
  display: flex;
  flex-direction: column;

  & p {
    margin: 0;
    padding: 2px;
  }

  & .content {
    font-size: 1rem;
    font-weight: 500;
  }

  & .tag {
    font-size: 0.8rem;
    color: #909090;
  }

  &.done .content {
    color: #909090;
    text-decoration: line-through;
  }
`;

const StarWrapper = styled.div`
  flex-basis: 1;

  & .not-starred {
    color: #bbbbbb;
  }

  & .starred {
    color: #1a85ff;
  }
`;

const TaskItem = ({ task }) => {
  const { id, name, isDone, isImportant, tag } = task;
  const dispatch = useDispatch();

  const handleToggle = (e) => {
    dispatch(toggle(id));
  };

  const handleStar = (e) => {
    dispatch(star(id));
  };

  const handleClickItem = (e) => {
    dispatch(change(`${id}`));
  };

  return (
    <Container>
      <CheckboxWrapper>
        <input type="checkbox" checked={isDone} onChange={handleToggle} id={id} />
      </CheckboxWrapper>
      <ContentWrapper className={isDone ? 'done' : undefined} onClick={handleClickItem}>
        <p className="content">{name}</p>
        <p className="tag">
          {mapItemToComponent[tag]} {tag}
        </p>
      </ContentWrapper>
      <StarWrapper onClick={handleStar}>
        {isImportant ? mapItemToComponent.starred() : mapItemToComponent.notStarred()}
      </StarWrapper>
    </Container>
  );
};

export default TaskItem;
