import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import moviesApi from '../components/Api/Api-server';

const apiKey = '3550330ecc32a34c7342dbd44dd96d6e';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    searchMovies: [],
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSearchMovies = () => {
    const { searchQuery } = this.state;
    moviesApi.fetchMovies(searchQuery).then(movies => {
      console.log(movies);
      this.setState({ searchMovies: movies });
    });
  };
  a = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/504949?api_key=${apiKey}&language=en-US`,
    )
      .then(response => response.json())
      .then(data => console.log(data));
  };

  render() {
    const { searchQuery, searchMovies } = this.state;
    const { match } = this.props;

    return (
      <>
        <div>
          <input
            type="text"
            name="searchQuery"
            value={searchQuery}
            onChange={this.handleChange}
          />

          <button type="button" onClick={this.handleSearchMovies}>
            Search
          </button>

          <button type="button" onClick={this.a}>
            Searchasdas
          </button>
        </div>
        <ul>
          {searchMovies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`${match.url}/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
