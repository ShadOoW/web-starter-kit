// Import Dependencies
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import Theme
import { cssVarColorsNames } from 'styles/theme';

// Import Layout
import { Flex } from 'layout';

const pulse = keyframes`
  0% {
    background-color: transparent;
  }
  100% {
    background-color: ${cssVarColorsNames.foregroundAccent};
  }
`;

const Placeholder = styled.div`
  animation: ${pulse} 5s 1 forwards;
  width: 100%;
  height: 0;
  box-sizing: content-box;
  padding-bottom: 100%;
`;

function Placeholders() {
  const getPlaceholders = () => {
    const placeholders = [];
    for (let i = 0; i < 20; i += 1) {
      placeholders.push(
        <Flex p={2} width={['100%', '50%', '33.3%', '25%']} key={i}>
          <Placeholder />
        </Flex>,
      );
    }

    return placeholders;
  };

  return (
    <Flex flexWrap='wrap' mx={-2}>
      {getPlaceholders()}
    </Flex>
  );
}

export default Placeholders;
