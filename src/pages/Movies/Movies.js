import { MoviesList } from 'components/MoviesList';
import { searchMovies } from 'components/services/api';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import { ButtonSearch, Input, MoviesContainer } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const movieQuery = searchParams.get('query') ?? '';
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async query => {
      try {
        setIsLoading(true);
        const movies = await searchMovies(query);
        setMovies(movies.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieQuery) {
      getMovies(movieQuery);
    }
  }, [movieQuery]);

  const handleChange = e => {
    const searchQuery = e.target.value;
    if (searchQuery === '') {
      return setSearchParams({});
    }
    return;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.query.value;
    if (searchQuery === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: searchQuery });
  };

  return (
    <MoviesContainer>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          onChange={handleChange}
          placeholder="Search movies"
        />
        <ButtonSearch type="submit">Search</ButtonSearch>
      </form>

      {error && <div>Sorry, something went wrong</div>}
      {isLoading && (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#37745B"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      )}
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
};

export default Movies;
