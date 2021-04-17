import React, { Component } from 'react';
import moviesApi from '../Api/Api-server';
import PropTypes from 'prop-types';

class Review extends Component {
  state = {
    reviews: [],
  };

  async componentDidMount() {
    const { movieId } = this.props;
    const response = await moviesApi.fetchMovieReview(movieId);

    this.setState({
      reviews: response,
    });
  }

  render() {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length === 0 ? (
          <p>We don't heve any reviews for this movies</p>
        ) : (
          <ul>
            {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <b>Author: {author}</b>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Review.propTypes = {
  movieId: PropTypes.number.isRequired,
};

export default Review;
