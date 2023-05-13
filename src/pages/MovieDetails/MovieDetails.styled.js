import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MovieInfoSection = styled.div`
  padding: 20px 0;
`;

export const StyledLinkButton = styled(Link)`
  padding: 10px;
  background-color: #edc5ab;
  color: #37745b;
  border-radius: 10px;
  border: none;
  text-align: center;
  margin-bottom: 20px;
`;

export const StyledLink = styled(Link)`
  color: #217074;
  margin-bottom: 10px;
  transition: transform 250ms ease-in-out;

  :hover,
  :focus {
    transform: scale(1.1);
  }
`;

export const MovieContainer = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto;
  align-content: stretch;
  margin-bottom: 20px;
`;

export const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MovieTitle = styled.h1`
  font-size: 30px;
  color: #217074;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  color: #217074;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
