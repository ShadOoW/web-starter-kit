// Import Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'react-smooth-image';

// Import Layout
import { Flex } from 'layout';

// Import Typography
import { Text } from 'typography';

function Characters({ characters }) {
  if (characters.length === 0) {
    return <div>0 Results found :(</div>;
  }

  return (
    <Flex flexWrap='wrap' mx={-2}>
      {characters.map((character) => (
        <Flex
          p={2}
          width={['100%', '50%', '33.3%', '25%']}
          position='relative'
          key={character.id}
        >
          <Image
            src={character.image}
            alt={character.name}
            transitionTime={0.15}
          />

          <Flex
            position='absolute'
            alignItems='center'
            justifyContent='center'
            backgroundColor='var(--color-backgroundAccent)'
            width='100%'
            py={3}
            px={4}
            bottom={0}
            opacity={0.8}
            textAlign='center'
          >
            <Text bold>{character.name}</Text>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Characters;
