import React, { Component } from 'react';
import moviesApi from '../Api/Api-server';

const apiKey = '3550330ecc32a34c7342dbd44dd96d6e';

class Review extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;
    const response = await moviesApi.fetchMovieReview(movieId);

    this.setState({
      reviews: response.length > 5 ? [...response.slice(0, 5)] : [...response],
    });
  }

  render() {
    console.log(this.state);
    const { reviews } = this.state;
    return (
      <div>
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <b>Author: {author}</b>
              <p>{content}</p>
            </li>
          ))}
        </ul>
        <button type="button">open</button>
      </div>
    );
  }
}

export default Review;
