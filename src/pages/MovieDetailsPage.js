import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import moviesApi from '../components/Api/Api-server';
import Cast from '../components/Cast';
import Review from '../components/Review';
import routes from '../routes';
import './MovieDetailsPage.scss';

class MovieDetailsPage extends Component {
  state = {
    img: null,
    title: null,
    overview: null,
    vote: null,
    genres: [],
    date: null,
  };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    const response = await moviesApi.fetchMovieDetails(movieId);

    this.setState({
      img: `https://image.tmdb.org/t/p/w500/${response.poster_path}`,
      title: response.title,
      overview: response.overview,
      vote: response.vote_average,
      genres: response.genres,
      date: response.release_date.slice(0, 4),
    });
  }

  handleGoBack = () => {
    const { location, history } = this.props;

    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }
    history.push(routes.home);
  };

  render() {
    const { img, overview, title, vote, genres, date } = this.state;
    const { match, location, history } = this.props;

    return (
      <>
        <div>
          <button type="button" onClick={this.handleGoBack}>
            Go back
          </button>
          <div className="article">
            <div className="article__img-wrap">
              <img src={img} alt={title} className="article__img" />
            </div>
            <div className="article__content">
              <h2 className="article__title">
                {title} ({date})
              </h2>
              <p className="article__vote">Vote: {vote}</p>
              <h3 className="article__overview-title">Overview</h3>
              <p className="article__overview">{overview}</p>
              <h3 className="article__genre">Genres</h3>
              <ul className="article__genre__list list">
                {genres.map(({ id, name }) => (
                  <li key={id} className="article__genre__item">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="movie-info">
            <p>Additional information</p>
            <ul className="list">
              <li>
                <NavLink
                  to={`${match.url}/cast`}
                  className="nav__link"
                  activeClassName="nav__link--active"
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${match.url}/review`}
                  className="nav__link"
                  activeClassName="nav__link--active"
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Switch>
          <Route
            path={`${match.path}/cast`}
            render={() => <Cast movieId={Number(match.params.movieId)} />}
          />
          <Route
            path={`${match.path}/review`}
            render={() => <Review movieId={Number(match.params.movieId)} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
