import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';
import Menu from './components/Menu';
import TaskPage from './pages/TaskPage';
import Logo from './components/Logo';
import Modal from './components/Modal';
import AddTask from './components/AddTask';

const Nav = styled.nav`
  height: 100vh;
  min-width: 240px;
  background: #e5edfa;
`;

const Main = styled.main`
  height: 100vh;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;

function App() {
  const { categories, tags } = useSelector((state) => state);

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
            <Route key={category.id} path="/category/:category" element={<TaskPage />} />
          ))}
          {tags.map((tag) => (
            <Route key={tag.id} path="/tag/:tag" element={<TaskPage />} />
          ))}
        </Routes>
      </Main>
      <Modal />
      <AddTask />
    </div>
  );
}

export default App;
