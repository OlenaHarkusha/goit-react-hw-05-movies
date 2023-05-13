import { ActorCard, ActorsList, Name } from './CastList.styled';
import PropTypes from 'prop-types';

export const CastList = ({ cast }) => {
  return (
    <ActorsList>
      {cast.map(actor => (
        <ActorCard key={actor.id}>
          <img
            src={
              actor['profile_path']
                ? `https://image.tmdb.org/t/p/w500${actor['profile_path']}`
                : `https://placehold.co/500x750?text=Image`
            }
            alt={actor.name}
          />
          <Name>{actor.name}</Name>
          <p>Character: {actor.character}</p>
        </ActorCard>
      ))}
    </ActorsList>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
