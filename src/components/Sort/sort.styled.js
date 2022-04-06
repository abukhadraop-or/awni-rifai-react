import styled from 'styled-components';
import viewPorts from 'global-variables/viewPorts';

export const SortHead = styled.div`
  margin-bottom: ${({ exapndList }) => (exapndList ? '1rem' : '0rem')};
  position: relative;
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 600;
`;

export const SortBody = styled.div`
  border-top: 1px solid #0000001a;
  padding-top: 0.5rem;
`;

export const SubTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 200;
`;

export const ChevronIcon = styled.i`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
`;

export const CardWrapper = styled.div`
  background-color: white;
  border-left: 1px;
  border-radius: 0.4rem;
  border: 0.1rem solid #0000001a;
  box-shadow: 0 0.2rem 0.2rem #0000001a;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  position: relative;
  width: 100%;
  
  @media (min-width: ${viewPorts.mobile}) {
    display: block;
    height: fit-content;
  }
`;
