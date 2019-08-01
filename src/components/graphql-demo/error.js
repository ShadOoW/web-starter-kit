import React from 'react';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import Layout
import { Flex } from 'layout';

export default () => (
  <Flex py={3} color={cssVarColorsNames.foregroundError}>
    Error: something bad happened with graphql, check console for errors
  </Flex>
);
