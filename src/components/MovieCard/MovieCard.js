import { Link, useLocation } from 'react-router-dom';

export const MovieCard = ({ title, poster, id }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`movies/${id}`} state={{ from: location }}>
        <img src={`https://image.tmdb.org/t/p/w300${poster}`} alt={title} />
        <h2>{title}</h2>
      </Link>
    </li>
  );
};
