import React from 'react';

const apiKey = '3550330ecc32a34c7342dbd44dd96d6e';

const fetchPopularMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`,
  )
    .then(response => response.json())
    .then(({ results }) => results);
};

const fetchMovies = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
  )
    .then(response => response.json())
    .then(({ results }) => results);
};

const fetchMovieDetails = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
  )
    .then(response => response.json())
    .then(data => data);
};

const fetchMovieImgUrl = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`,
  )
    .then(response => response.json())
    .then(data => data);
  /* const imgUrl = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`;
  return imgUrl; */
};

const fetchMovieCast = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
  )
    .then(response => response.json())
    .then(({ cast }) => cast);
};

const fetchMovieReview = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  )
    .then(response => response.json())
    .then(({ results }) => results);
};

export default {
  fetchPopularMovies,
  fetchMovies,
  fetchMovieDetails,
  fetchMovieImgUrl,
  fetchMovieCast,
  fetchMovieReview,
};
