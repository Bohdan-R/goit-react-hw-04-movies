import React, { Component } from 'react';
import moviesApi from '../components/Api/Api-server';
import MoviesList from '../components/MoviesList';

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

    if (searchQuery === '') {
      return;
    }

    moviesApi.fetchMovies(searchQuery).then(movies => {
      this.setState({ searchMovies: movies });
    });
  };

  render() {
    const { searchQuery, searchMovies } = this.state;

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
        </div>
        {searchMovies && <MoviesList movies={searchMovies} />}
      </>
    );
  }
}

export default MoviesPage;
