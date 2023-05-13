import { ReviewsList } from 'components/ReviewsList';
import { getMovieReviews } from 'components/services/api';
import { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getReviews = async id => {
      try {
        setIsLoading(true);
        const reviews = await getMovieReviews(id);
        setReviews(reviews.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getReviews(movieId);
  }, [movieId]);

  return (
    <div>
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
      {reviews ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <div>There is no reviews yet</div>
      )}
    </div>
  );
};
