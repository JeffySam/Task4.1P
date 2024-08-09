import React from 'react';
import { Menu, Input } from 'semantic-ui-react';

const Header = () => (
  <Menu>
    <Menu.Item name="home">DEV@Deakin</Menu.Item>
    <Menu.Item position="right">
      <Input icon="search" placeholder="Search..." />
    </Menu.Item>
    <Menu.Item name="login">Login</Menu.Item>
  </Menu>
);

export default Header;
