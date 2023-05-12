export const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(actor => (
        <li>
          <img
            src={`https://image.tmdb.org/t/p/w500${actor['profile_path']}`}
            alt={actor.name}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};
