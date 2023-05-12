import { MoviesList } from 'components/MoviesList';
import { getTrending } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const location = useLocation();
  console.log(location, 'home');

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      setIsLoading(true);
      const trendingMovies = await getTrending();
      setMovies(trendingMovies.results);
      console.log(trendingMovies.results);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <MoviesList movies={movies} />
    </div>
  );
};

export default Home;
