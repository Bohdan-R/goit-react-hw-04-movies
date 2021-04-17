import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import './Navigation.scss';

const Navigation = () => {
  return (
    <nav className="nav">
      <NavLink
        exact
        to={routes.home}
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Home
      </NavLink>

      <NavLink
        to={routes.movies}
        className="nav__link"
        activeClassName="nav__link--active"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
