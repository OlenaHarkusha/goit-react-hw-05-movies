import { MovieCard } from 'components/MovieCard';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          poster={movie['poster_path']}
          id={movie.id}
        />
      ))}
    </ul>
  );
};
