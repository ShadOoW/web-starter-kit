import React from 'react';

import { Flex } from 'layout';
import { H3 } from 'typography';
import Cursor from './cursor';

const Logo = () => (
  <Flex
    alignItems='center'
  >
    <H3>~/web-starter-kit &gt;</H3>
    <Cursor />
  </Flex>
);

export default Logo;
