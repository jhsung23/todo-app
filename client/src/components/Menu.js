import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { mapItemToComponent } from '../lib/mapItemToComponent';

const MenuTitle = styled.p`
  color: #6d6e71;
  font-weight: 700;
  font-size: 0.75rem;
  padding-left: 20px;
`;

const MenuItemContainer = styled.ul`
  margin: 0;
  padding: 0;
  margin-bottom: 40px;

  & #nav-link {
    text-decoration: none;
  }

  & .active-style span {
    font-weight: 700;
  }
`;

const MenuItem = styled.li`
  height: 30px;
  list-style: none;
  display: flex;
  align-items: center;
  font-weight: 400;
  padding-left: 20px;
  color: #1a85ff;

  & > span {
    margin-left: 10px;
    color: #363637;
  }
`;

const Menu = ({ menuTitle, menuData }) => {
  return (
    <>
      <MenuTitle>{menuTitle}</MenuTitle>
      <MenuItemContainer title={menuTitle}>
        {menuData.map((menu) => (
          <NavLink
            key={menu.id}
            id="nav-link"
            className={({ isActive }) => (isActive ? 'active-style' : undefined)}
            to={menu.to}
          >
            <MenuItem>
              {menu.icon ? menu.icon : mapItemToComponent[menu.name]}
              <span>{menu.name}</span>
            </MenuItem>
          </NavLink>
        ))}
      </MenuItemContainer>
    </>
  );
};

export default Menu;
