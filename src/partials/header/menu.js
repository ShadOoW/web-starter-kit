import React, { useState } from 'react';
import styled from 'styled-components';

import BurgerIcon from './burger.svg';
import ThemeTogglerIcon from './theme-toggler.svg';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.darker};
  align-self: baseline;
  border-right: 1px solid;
  margin-right: 18px;
  z-index: 9999;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    position: absolute;
    top: 50px;
    right: 0;
    border: none;
    margin: 0;
    padding: ${({ theme }) => theme.space[3]};

    ${({ hide }) => hide && `
      display: none;
    `}
  }
`;

const UL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.space[4]};
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

const LI = styled.li`
  margin: 0 ${({ theme }) => theme.space[3]};

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    margin: 0;
    padding: ${({ theme }) => theme.space[2]};
  }
`;

const IconWrapper = styled.div`
  cursor: pointer;
  margin-right: ${({ theme }) => theme.space[3]};
`;

const BurgerIconWrapper = styled(IconWrapper)`
  @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
    display: none;
  }
`;

const Menu = () => {
  const [hide, toggleHide] = useState(true);
  return (
    <>
      <Nav className={hide ? 'hidden' : 'shown'} hide={hide} data-testid="nav">
        <UL>
          <LI>About</LI>
          <LI>Posts</LI>
        </UL>
      </Nav>
      <BurgerIconWrapper onClick={() => toggleHide(!hide)} data-testid="burger">
        <BurgerIcon width={24} height={24} />
      </BurgerIconWrapper>
      <IconWrapper data-testid="theme-toggler">
        <ThemeTogglerIcon width={24} height={24} />
      </IconWrapper>
    </>
  );
};

export default Menu;
