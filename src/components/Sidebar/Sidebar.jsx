import React, { useState } from 'react';
import {
  StyledSidebar,
  LogoImage,
  StyledSpacer,
  BurgerIconContainer,
} from 'components/Sidebar/sidebar';
import Container from 'components/Container/Container';
import Box from 'components/Box/Box';
import NavTypo from 'components/NavTypo/NavTypo';
import NavList from 'components/NavList/NavList';
import { GiHamburgerMenu } from 'react-icons/gi';

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState('noAnimation');
  return (
    <Container>
      <BurgerIconContainer>
        <GiHamburgerMenu
          onClick={() =>
            setShowSidebar((prev) =>
              prev === 'translateRight' ? 'translateLeft' : 'translateRight'
            )
          }
        />
      </BurgerIconContainer>
      <StyledSidebar showSidebar={showSidebar}>
        <Box>
          <LogoImage
            alt=""
            src={`${process.env.PUBLIC_URL}/assets/images/logo.png`}
          />
          <NavTypo>Bookify</NavTypo>
        </Box>
        <StyledSpacer />
        <Box>
          <NavList />
        </Box>
      </StyledSidebar>
    </Container>
  );
}

export default Sidebar;
