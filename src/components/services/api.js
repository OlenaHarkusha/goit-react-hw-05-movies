import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'f4722c6af97ed7e290b62b5fccb35efc';

export const getTrending = async page => {
  const response = await axios.get(
    `trending/movie/day?api_key=${KEY}&page=${page}`
  );
  return response.data;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

export const getMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
  return response.data;
};
