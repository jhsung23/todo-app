import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import TaskItem from '../components/TaskItem';
import { open, change } from '../module/modal';
import { ReactComponent as Nothing } from '../img/Nothing.svg';

const Container = styled.div`
  padding: 20px;
  padding-top: 40px;
  height: 100vh;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .nothing {
    width: 200px;
    height: 200px;
    margin-top: 100px;
  }

  & p {
    color: #777;
    font-size: 1.1rem;
  }
`;

const TaskPage = () => {
  const dispatch = useDispatch();

  const { category, tag } = useParams();
  const { tasks } = useSelector((state) => state);
  let taskData;
  let pageTitle = category || tag;

  if (category === 'tasks') {
    taskData = tasks;
  } else if (category === 'important') {
    taskData = tasks.filter((task) => task.isImportant);
  } else if (category === 'completed') {
    taskData = tasks.filter((task) => task.isDone);
  } else {
    taskData = tasks.filter((task) => task.tag === tag);
  }

  const closeModal = (e) => {
    setTimeout(() => {
      dispatch(change(''));
    }, 300);
    dispatch(open(false));
  };

  return (
    <Container onClick={closeModal}>
      <Header title={pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)} />
      {taskData.length ? (
        taskData.map((task) => <TaskItem key={task.id} task={task} />)
      ) : (
        <Wrapper>
          <Nothing className="nothing" />
          <p>There's nothing to do.</p>
        </Wrapper>
      )}
    </Container>
  );
};

export default TaskPage;
