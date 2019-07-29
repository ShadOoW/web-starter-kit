/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';
import styled from 'styled-components';

import BurgerIcon from './burger.svg';
import ThemeTogglerIcon from './theme-toggler.svg';

const Nav = styled.nav`
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
  const cookieTheme = parseCookies().theme;

  const [hide, toggleHide] = useState(true);
  const [actualTheme, setActualTheme] = useState(cookieTheme || 'light');

  useEffect(() => {
    setCookie({}, 'theme', actualTheme);

    document.getElementsByTagName('html')[0].className = actualTheme;
  }, [actualTheme]);

  const toggleTheme = () => {
    setActualTheme(actualTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Nav hide={hide} data-testid="nav">
        <UL>
          <LI><a href="/about">About</a></LI>
          <LI>Posts</LI>
        </UL>
      </Nav>
      <BurgerIconWrapper onClick={() => toggleHide()} data-testid="burger">
        <BurgerIcon width={24} height={24} />
      </BurgerIconWrapper>
      <IconWrapper onClick={() => toggleTheme()} data-testid="theme-toggler">
        <ThemeTogglerIcon width={24} height={24} />
      </IconWrapper>
    </>
  );
};

export default Menu;
