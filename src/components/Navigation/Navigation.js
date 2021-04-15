import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <nav className="">
      <NavLink to={routes.home} className="" activeClassName="">
        Home
      </NavLink>

      <NavLink to={routes.movies} className="" activeClassName="">
        Movies
      </NavLink>
    </nav>
  );
};

export default Navigation;
