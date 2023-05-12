import { getMovieDetails } from 'components/services/api';
import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backlinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getDetails(movieId);
  }, [movieId]);

  const getDetails = async id => {
    try {
      const details = await getMovieDetails(id);
      setDetails(details);
      console.log(details);
    } catch (error) {
    } finally {
    }
  };

  const { title, overview, poster_path, vote_average, genres } = details;
  console.log(genres);

  return (
    <div>
      <Link to={backlinkLocationRef.current}>Go back</Link>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
      <div>
        <h1>{title}</h1>
        <p>User score: {Math.ceil(vote_average * 10)}%</p>
        <div>
          <h1>Overview</h1>
          <p>{overview}</p>
        </div>
        <div>
          <h2>Genres</h2>
          <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <h2>Additional information</h2>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Rewiews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
