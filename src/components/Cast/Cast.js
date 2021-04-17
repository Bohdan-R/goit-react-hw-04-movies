import React, { Component } from 'react';
import moviesApi from '../Api/Api-server';
import PropTypes from 'prop-types';
import './Cast.scss';

class Cast extends Component {
  state = {
    cast: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;
    const response = await moviesApi.fetchMovieCast(movieId);

    this.setState({
      cast: response.length > 15 ? [...response.slice(0, 15)] : [...response],
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <ul className="list">
        {cast.map(actor => (
          <li key={actor.id}>
            <div className="cast-card">
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

Cast.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Cast;
