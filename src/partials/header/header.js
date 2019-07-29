import React from 'react';
import styled from 'styled-components';

import Logo from './logo';
import Menu from './menu';

const Wapper = styled.div`
  background-color: var(--color-backgroundAccent);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: ${({ theme }) => theme.space[4]};
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 760px;
  max-width: 100%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    flex-direction: row-reverse;
  }
`;

const Header = () => (
  <Wapper>
    <Inner>
      <a href="/">
        <Logo />
      </a>
      <Right>
        <Menu>
          Test
        </Menu>
      </Right>
    </Inner>
  </Wapper>
);

export default Header;
