import styled from 'styled-components';

export const StyledShowListOnActionWrapper = styled.div`
  position: absolute;
  background-color: white;
  border-radius: 0.5rem;
  border: 1px solid #00000033;
  display: ${({ actionState }) => (actionState ? 'inline-block' : 'none')};
  height: fit-content;
  left: 0;
  min-width: 200px;
  padding: 1rem;
  text-align: left;
  top: 1.3rem;
`;

export const StyledUnorderedList = styled.ul`
  list-style-type: none;
`;
