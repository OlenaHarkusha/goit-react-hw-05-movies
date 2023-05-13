import { AuthorName, Reviews } from './ReviewsList.styled';
import PropTypes from 'prop-types';

export const ReviewsList = ({ reviews }) => {
  return (
    <Reviews>
      {reviews.map(review => (
        <li key={review.id}>
          <AuthorName>Author: {review.author}</AuthorName>
          <p>{review.content}</p>
        </li>
      ))}
    </Reviews>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
