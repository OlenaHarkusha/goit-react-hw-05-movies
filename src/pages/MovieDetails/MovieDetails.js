import { getMovieDetails } from 'components/services/api';
import { Suspense, useEffect, useRef, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  MovieContainer,
  MovieInfoSection,
  MovieInfoWrapper,
  MovieTitle,
  StyledLink,
  StyledLinkButton,
  Subtitle,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [details, setDetails] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backlinkLocationRef = useRef(location.state?.from ?? '/');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getDetails = async id => {
      try {
        setIsLoading(true);
        const details = await getMovieDetails(id);
        setDetails(details);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getDetails(movieId);
  }, [movieId]);

  const { title, overview, poster_path, vote_average, genres } = details;

  return (
    <MovieInfoSection>
      <StyledLinkButton to={backlinkLocationRef.current}>
        Go back
      </StyledLinkButton>
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
      <MovieContainer>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `https://placehold.co/500x750?text=Image`
          }
          alt={title}
        />
        <MovieInfoWrapper>
          <MovieTitle>{title}</MovieTitle>
          <p>User score: {Math.ceil(vote_average * 10)}%</p>
          <div>
            <Subtitle>Overview</Subtitle>
            <p>{overview}</p>
          </div>
          <div>
            <Subtitle>Genres</Subtitle>
            <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
          </div>
        </MovieInfoWrapper>
      </MovieContainer>
      <div>
        <Subtitle>Additional information</Subtitle>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Rewiews</StyledLink>
          </li>
        </ul>
        <Suspense
          fallback={
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              visible={true}
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </MovieInfoSection>
  );
};

export default MovieDetails;
