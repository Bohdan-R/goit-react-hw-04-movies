import React, { Component } from 'react';
import moviesApi from '../components/Api/Api-server';
import MoviesList from '../components/MoviesList';

class HomePage extends Component {
  state = {
    popularMovies: [],
  };

  async componentDidMount() {
    const moviesInTrend = await moviesApi.fetchPopularMovies();

    this.setState({ popularMovies: moviesInTrend });
  }

  render() {
    const { popularMovies } = this.state;

    return (
      <div>
        <h1>Trending Today</h1>
        {popularMovies && <MoviesList movies={popularMovies} />}
      </div>
    );
  }
}

export default HomePage;
