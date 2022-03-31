import React from "react";
import styled from "styled-components";

const mainMobileMenuItems = [
  { mobileMenuTitle: "Movies" },
  { mobileMenuTitle: "Tv Shows" },
  { mobileMenuTitle: "People" },
];

const secondaryMobileMenuItems = [
  { mobileMenuTitle: "Contribution Bible" },
  { mobileMenuTitle: "Apps" },
  { mobileMenuTitle: "Discussions" },
  { mobileMenuTitle: "Leaderboard" },
  { mobileMenuTitle: "Contribute" },
  { mobileMenuTitle: "API" },
  { mobileMenuTitle: "Support" },
  { mobileMenuTitle: "About" },
];
const StyledMobileMenu = styled.ul`
  color: white;
  list-style-type: none;
  font-weight: 600;
  .main-item {
    font-size: 1.3rem;
    margin-top: 1rem;
  }
  .secondary-item {
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.6);
  }
`;

/**
 * Mobile menu container
 * @returns {JSX}
 */
function MobileMenu() {
  return (
    <StyledMobileMenu>
      {mainMobileMenuItems.map((item) => (
        <li key={Math.random()} className="main-item">
          {item.mobileMenuTitle}
        </li>
      ))}
      {secondaryMobileMenuItems.map((item) => (
        <li key={Math.random()} className="secondary-item">
          {item.mobileMenuTitle}
        </li>
      ))}
    </StyledMobileMenu>
  );
}
export default MobileMenu;
