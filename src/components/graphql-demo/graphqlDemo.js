// Import Dependencies
import React, { useState } from 'react';
import { useQuery } from 'graphql-hooks';

// Import Layout
import { Flex, Div } from 'layout';

// Import Components
import { Loader } from 'common';

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
      <Div py={4} maxWidth='small'>
        <FilterInput
          placeholder='Filter by name (ex: Rick, Morty, Robot)'
          onChange={(value) => setSearchInputValue(value)}
        />
      </Div>

      {error && (
        <Error />
      )}

      {loading && (
        <Loader />
      )}

      {!loading && data && data.characters && (
        // results is null, instead of being an empty array :(
        <Characters characters={data.characters.results || []} />
      )}

      <Flex justifyContent='center' py={[3, 4]}>
        <Div width='50%' maxWidth={300}>
          <img src='/static/images/placeholder.png' alt='rick and morty' />
        </Div>
      </Flex>
    </Flex>
  );
}

export default GraphqlDemo;