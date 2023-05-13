import { ReviewsList } from 'components/ReviewsList';
import { getMovieReviews } from 'components/services/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(movieId);
  }, [movieId]);

  const getReviews = async id => {
    try {
      const reviews = await getMovieReviews(id);
      setReviews(reviews.results);
      console.log(reviews.results);
    } catch (error) {}
  };

  return (
    <div>
      <ReviewsList reviews={reviews} />
    </div>
  );
};
