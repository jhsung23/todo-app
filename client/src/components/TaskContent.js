import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { mapItemToComponent } from '../lib/mapItemToComponent';
import { star, toggle } from '../module/tasks';

const Container = styled.div`
  padding: 20px 20px;
  height: 25vh;
  min-width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  & .star {
    font-size: 1.3rem;
    padding-bottom: 3px;
  }
`;

const Title = styled.h3`
  color: #363637;
  font-size: 1.3rem;
  margin: 0;
  margin-right: 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  height: 23px;
  align-items: center;
  justify-content: space-between;

  & span {
    color: #363637;
    font-size: 1rem;
    font-weight: 500;
  }

  & span.item-name {
    color: #999;
    font-weight: 600;
    font-size: 0.75rem;
  }

  & input {
    width: 1.1rem;
    height: 1.1rem;
  }
`;

const P = styled.p`
  margin: 0;
  height: 80px;
  background-color: #e8e8e8;
  padding: 10px;
  border-radius: 5px;
  font-size: 0.8rem;

  &.nothing {
    color: #999;
  }
`;

const TaskContent = () => {
  const dispatch = useDispatch();

  const { tasks, tags, modal } = useSelector((state) => state);

  const taskData = tasks.filter((task) => task.id === Number(modal.content))[0];
  const tagIcon = tags.filter((tag) => tag.name === taskData.tag)[0].icon;

  const handleToggle = () => {
    dispatch(toggle(taskData.id));
  };

  const handleStar = () => {
    dispatch(star(taskData.id));
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>{taskData.name}</Title>
        {taskData.isImportant
          ? mapItemToComponent.starred({ className: 'star', onClick: handleStar })
          : mapItemToComponent.notStarred({ className: 'star', onClick: handleStar })}
      </TitleWrapper>
      <ItemWrapper>
        <span className="item-name">태그</span>
        <span>
          {tagIcon} {taskData.tag}
        </span>
      </ItemWrapper>
      <ItemWrapper>
        <span className="item-name">완료</span>
        <input type="checkbox" checked={taskData.isDone} onChange={handleToggle} />
      </ItemWrapper>
      <P className={taskData.content ? undefined : 'nothing'}>
        {taskData.content ? taskData.content : '내용이 없습니다.'}
      </P>
    </Container>
  );
};

export default TaskContent;
