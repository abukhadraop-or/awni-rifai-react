import styled from "styled-components";
import viewPorts from "global-variables/viewPorts";

 const StyledMoreIcon = styled.i`
  display: none;

  @media (min-width: ${viewPorts.mobile}) {
    display: initial;
    position: absolute;
    top: 0.7rem;
    right: 0.7rem;
    font-size: 0.8rem;
    background-color: #fff;
    padding: 0.2rem;
    border-radius: 50%;
    opacity: 0.4;
    
    :hover {
      opacity: 1;
      background-color: darkblue;
      cursor: pointer;
    }
  }
`;
export default StyledMoreIcon;