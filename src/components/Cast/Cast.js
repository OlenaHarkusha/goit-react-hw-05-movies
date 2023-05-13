import { CastList } from 'components/CastList';
import { getMovieCredits } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async id => {
      try {
        const credits = await getMovieCredits(id);
        setCast(credits.cast);
        console.log(credits.cast);
      } catch (error) {
      } finally {
      }
    };

    getCast(movieId);
  }, [movieId]);

  return <div>{cast.length !== 0 && <CastList cast={cast} />}</div>;
};

