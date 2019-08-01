import React from 'react';
import Loader from 'react-loader-spinner';

// Import Layout
import { Flex } from 'layout';

export default () => (
  <Flex justifyContent='center' my={4}>
    <Loader
      type='Watch'
      color='var(--color-foregroundAccent)'
      height={60}
      width={60}
    />
  </Flex>
);
