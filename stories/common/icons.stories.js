import React from 'react';

// Component
import { SVGBurger, SVGThemeTogger } from 'common/icons';

// Layout
import { Flex } from 'layout';

export default {
  title: 'Icons',
};

export const Icons = () => (
  <Flex>
    <Flex pr='2rem'>
      <SVGBurger />
    </Flex>
    <SVGThemeTogger />
  </Flex>
);
