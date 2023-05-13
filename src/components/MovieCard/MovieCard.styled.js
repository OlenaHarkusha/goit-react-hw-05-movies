import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  background-color: #ffffff;
  transition: box-shadow 250ms ease-in-out;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
    box-shadow: 5px 5px 5px 0px rgba(198, 200, 204, 1);
  }
`;

export const Poster = styled.img`
  object-fit: cover;
`;

export const StyledLink = styled(Link)`
  color: #217074;
`;

export const MovieTitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  padding: 10px;
`;
