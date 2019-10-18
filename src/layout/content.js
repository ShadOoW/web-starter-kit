import React from 'react';
import PropTypes from 'prop-types';

// Layout
import { Flex, Block } from './display';

export const Content = ({ children }) => (
  <Flex flexDirection='column'>
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
      <Block maxWidth='larger' width='100%' p={[4, 5]}>
        {children}
      </Block>
    </Flex>
  </Flex>
);

Content.propTypes = {
  children: PropTypes.node.isRequired,
};
