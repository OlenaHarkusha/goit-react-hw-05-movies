import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80vw;
  margin: 0 auto;
`;

export const Header = styled.header`
  background-color: #edc5ab;
  box-shadow: 0px 6px 5px 0px rgba(198, 200, 204, 1);
  position: sticky;
  top: 0;
  z-index: 5;
`;

export const Navigation = styled.nav`
  width: 80vw;
  margin: 0 auto;

  display: flex;
  gap: 20px;
`;

export const StyledNavLink = styled(NavLink)`
  padding: 10px 0px;
  text-transform: uppercase;
  color: #217074;
  transition: transform 250ms ease-in-out;
  font-weight: bold;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(1.5);
  }
`;
