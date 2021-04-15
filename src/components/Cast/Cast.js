import React, { Component } from 'react';
import moviesApi from '../Api/Api-server';

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

  a = () => {
    console.log(this.state);
  };

  render() {
    const { cast } = this.state;
    return (
      <div>
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img src={actor.profile_path} />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.a}>
          Open
        </button>
      </div>
    );
  }
}

export default Cast;
