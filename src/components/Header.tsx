import React from 'react';
import { BrowserRouter, NavLink, Router } from 'react-router-dom';
import Routing from './Routing';

const Header = (): JSX.Element => (
  <header className="header">
    <nav className="header__nav">
      <ul className="header__list">
        <li className="header__list-item">
          <NavLink exact className="header__list-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="header__list-item">
          <NavLink exact className="header__list-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
