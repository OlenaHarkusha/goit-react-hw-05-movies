import { MoviesList } from 'components/MoviesList';
import { getTrending } from 'components/services/api';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Button, Section, Title } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState();

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsLoading(true);
        const trendingMovies = await getTrending(page);
        setMovies(state => [...state, ...trendingMovies.results]);
        setTotalPages(trendingMovies['total_pages']);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies(page);
  }, [page]);

  return (
    <Section>
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
      <>
        <Title>Trending Movies</Title>
        <MoviesList movies={movies} />
      </>

      {page < totalPages && (
        <Button type="button" onClick={() => setPage(state => state + 1)}>
          Load more
        </Button>
      )}
    </Section>
  );
};

export default Home;
