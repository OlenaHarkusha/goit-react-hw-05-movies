import { MovieCard } from 'components/MovieCard';
import { List } from './MoviesList.styled';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie['poster_path']}
          id={movie.id}
        />
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
