import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FiChevronsRight } from 'react-icons/fi';

import './App.css';
import Menu from './components/Menu';
import TaskPage from './pages/TaskPage';
import TaskInput from './components/TaskInput';
import TaskContent from './components/TaskContent';
import Logo from './components/Logo';
import { change } from './module/modal';

const Nav = styled.nav`
  height: 100vh;
  min-width: 240px;
  background: #e5edfa;
`;

const Main = styled.main`
  height: 100vh;
  flex-grow: 1;
  padding-left: 20px;
  padding-right: 20px;
`;

const Aside = styled.aside`
  width: 0;
  height: 100vh;
  background-color: #f4f4f4;
  transition: width 0.3s ease;

  & #close-button {
    font-size: 25px;
    color: #909090;
    margin-top: 15px;
    margin-left: 15px;
    cursor: pointer;
  }

  &.open {
    display: block;
    width: 330px;
  }
`;

function App() {
  const { categories, tags } = useSelector((state) => state.task);
  const { modalContent } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const handleClickClose = () => {
    dispatch(change(''));
  };

  return (
    <div className="App">
      <Nav>
        <Logo />
        <Menu menuTitle={'category'} menuData={categories} />
        <Menu menuTitle={'tags'} menuData={tags} />
      </Nav>
      <Main>
        <Routes>
          {categories.map((category) => (
            <Route
              key={category.id}
              path={category.to}
              element={<TaskPage category={category.name} />}
            />
          ))}
          {tags.map((tag) => (
            <Route key={tag.id} path={tag.to} element={<TaskPage tag={tag.name} />} />
          ))}
        </Routes>
      </Main>
      <Aside className={modalContent ? 'open' : undefined}>
        <FiChevronsRight id="close-button" onClick={handleClickClose} />
        {modalContent !== '' ? (
          modalContent === 'input' ? (
            <TaskInput />
          ) : (
            <TaskContent />
          )
        ) : undefined}
      </Aside>
    </div>
  );
}

export default App;
