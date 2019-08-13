// Import Dependencies
import React, { useState } from 'react';
import { useQuery } from 'graphql-hooks';

// Import Layout
import { Flex, Block } from 'layout';

// Import Sub Components
import FilterInput from './filterInput';
import Characters from './characters';
import Error from './error';

// https://rickandmortyapi.com/documentation/#character
export const GET_CHARACTERS = `
  query Characters($name: String) {
    characters(page: 1, filter: { name: $name }) {
      info {
        count
      }
      results {
        id
        name
        species
        image
      }
    }
  }
`;

function GraphqlDemo() {
  const [searchInputValue, setSearchInputValue] = useState('');

  const {
    loading, error, data,
  } = useQuery(GET_CHARACTERS, {
    variables: { name: searchInputValue },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Flex flexDirection='column'>
      <Block py={4} maxWidth='small'>
        <FilterInput
          placeholder='Filter by name (ex: Rick, Morty, Robot)'
          onChange={(value) => setSearchInputValue(value)}
          isLoading={loading}
        />
      </Block>

      {error && (
        <Error />
      )}

      {!loading && data && data.characters && (
        // results is null, instead of being an empty array :(
        <Characters characters={data.characters.results || []} />
      )}

      <Flex justifyContent='center' py={[3, 4]}>
        <Block width='50%' maxWidth={300}>
          <img src='/static/images/placeholder.png' alt='rick and morty' />
        </Block>
      </Flex>
    </Flex>
  );
}

export default GraphqlDemo;
