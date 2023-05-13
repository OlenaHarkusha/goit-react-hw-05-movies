import { useLocation } from 'react-router-dom';
import { ListItem, MovieTitle, Poster, StyledLink } from './MovieCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({ title, poster, id }) => {
  const location = useLocation();

  return (
    <ListItem>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <Poster
          src={
            poster
              ? `https://image.tmdb.org/t/p/w500${poster}`
              : `https://placehold.co/500x750?text=Image`
          }
          alt={title}
        />
        <MovieTitle>{title}</MovieTitle>
      </StyledLink>
    </ListItem>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
