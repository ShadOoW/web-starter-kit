import React from 'react';
import PropTypes from 'prop-types';

// Layout
import { Flex } from './display';

export const Container = ({ children }) => (
  <Flex flexDirection='column'>{children}</Flex>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
