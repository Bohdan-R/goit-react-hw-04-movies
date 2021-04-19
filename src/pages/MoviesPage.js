import React, { Component } from 'react';
import moviesApi from '../components/Api/Api-server';
import MoviesList from '../components/MoviesList';

class MoviesPage extends Component {
  state = {
    searchQuery: '',
    searchMovies: [],
  };

  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      moviesApi.fetchMovies(search).then(movies => {
        this.setState({
          searchQuery: '',
          searchMovies: movies,
        });
      });
    }

    return;
  }

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSearchMovies = e => {
    e.preventDefault();

    const { searchQuery } = this.state;
    this.props.location.search = searchQuery;

    if (searchQuery === '') {
      return;
    }

    moviesApi.fetchMovies(searchQuery).then(movies => {
      this.setState({
        searchQuery: '',
        searchMovies: movies,
      });
    });
  };

  render() {
    const { searchQuery, searchMovies } = this.state;

    return (
      <>
        <div>
          <form onSubmit={this.handleSearchMovies}>
            <input
              type="text"
              name="searchQuery"
              value={searchQuery}
              onChange={this.handleChange}
            />

            <button type="submit">Search</button>
          </form>
        </div>
        {searchMovies && <MoviesList movies={searchMovies} />}
      </>
    );
  }
}

export default MoviesPage;
