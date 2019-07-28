import React from 'react';
import { cssVarColorsNames } from 'styles/theme';

import { Flex } from 'layout';
import Logo from './logo';
import Menu from './menu';

const Header = () => (
  <Flex
    bg={cssVarColorsNames.backgroundAccent}
    p={4}
    position='relative'
  >
    <Flex
      justifyContent='space-between'
      width='medium'
      maxWidth='100%'
      m='auto'
    >
      <a href='/'>
        <Logo />
      </a>
      <Flex flexDirection={['row-reverse', 'row']}>
        <Menu>
          Test
        </Menu>
      </Flex>
    </Flex>
  </Flex>
);

export default Header;
