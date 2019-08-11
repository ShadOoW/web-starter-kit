import React from 'react';
import { cssVarColorsNames } from 'styles/theme';

import { Flex } from 'layout';
import Logo from './logo';
import Menu from './menu';

const Header = () => (
  <Flex
    bg={cssVarColorsNames.backgroundAccent}
    color={cssVarColorsNames.foregroundAccent}
    p={4}
    position='relative'
  >
    <Flex
      justifyContent='space-between'
      width='large'
      maxWidth='100%'
      m='auto'
    >
      <a href='/'>
        <Logo />
      </a>
      <Flex flexDirection={['row-reverse', 'row']}>
        <Menu />
      </Flex>
    </Flex>
  </Flex>
);

export default Header;
