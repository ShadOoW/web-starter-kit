import React from 'react';
import styled from 'styled-components';

import Cursor from './cursor';

const CommandLine = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.big};
  font-weight: 700;
  font-family: monospace, monospace;
`;

const Mark = styled.span`
  margin-left: ${({ theme }) => theme.space[2]};
`;

const Logo = () => (
  <CommandLine>
    ~/web-starter-kit<Mark>&gt;</Mark>
    <Cursor />
  </CommandLine>
);

export default Logo;
