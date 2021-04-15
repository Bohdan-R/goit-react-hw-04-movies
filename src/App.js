import React, { lazy, Suspense } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import AppBar from './components/AppBar';
import routes from './routes';

const App = () => {
  return (
    <>
      <AppBar />

      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
      </Switch>
    </>
  );
};

export default App;

/* 3550330ecc32a34c7342dbd44dd96d6e */
