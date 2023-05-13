import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  align-content: stretch;
  margin-bottom: 20px;
  margin-top: 20px;
`;
