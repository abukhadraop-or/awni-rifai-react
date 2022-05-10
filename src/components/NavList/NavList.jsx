import React from 'react';
import StyledNavList from 'components/NavList/nav-list';
import NavLink from 'components/NavLink/NavLink';
import { MdSpaceDashboard } from 'react-icons/md';
import NavTypo from 'components/NavTypo/NavTypo';

function NavList() {
  return (
    <StyledNavList>
      <NavLink>
       <NavTypo> <MdSpaceDashboard /></NavTypo>
        <NavTypo>Dashboard</NavTypo>
      </NavLink>
    </StyledNavList>
  );
}

export default NavList;
