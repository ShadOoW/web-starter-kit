// Import Dependencies
import React, { useState, useEffect } from 'react';
import { useQuery } from 'graphql-hooks';

// Import Layout
import { Flex, Block } from 'layout';

// Import Typography
import { Text } from 'typography';

// Import Common components
import { Input } from 'common/input';
import { Pagination } from 'common/pagination';

// Import Sub Components
import Characters from './characters';
import Placeholders from './placeholders';

// https://rickandmortyapi.com/documentation/#character
export const GET_CHARACTERS = `
  query Characters($name: String, $page: Int) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages,
        next,
        prev
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
  const [page, setPage] = useState(1);
  const [searchInputValue, setSearchInputValue] = useState('');

  useEffect(() => setPage(1), [searchInputValue]);

  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { name: searchInputValue, page },
    notifyOnNetworkStatusChange: true,
  });

  return (
    <Flex flexDirection='column'>
      <Block pt='1rem' maxWidth='small'>
        <Input
          placeholder='Filter by name (ex: Rick, Robot)'
          onChange={(value) => setSearchInputValue(value)}
          isLoading={loading}
        />
      </Block>

      {error && (
        <Text py='2rem' error>
          Error: something bad happened with graphql, check console for errors
        </Text>
      )}

      {!loading && data && data.characters && (
        <Flex flexDirection='column'>
          <Flex py='1rem' justifyContent='center' maxWidth='small'>
            <Pagination
              page={page}
              pages={data.characters.info.pages}
              next={data.characters.info.next}
              prev={data.characters.info.prev}
              onNext={setPage}
              onPrev={setPage}
            />
          </Flex>
          <Characters characters={data.characters.results || []} />
        </Flex>
      )}

      {loading && (
        <Block pt='5.7rem'>
          <Placeholders />
        </Block>
      )}

      <Flex justifyContent='center' pt={['1rem', '2rem']}>
        <Block width='50%' maxWidth='30rem'>
          <img src='/images/placeholder.png' alt='rick and morty' />
        </Block>
      </Flex>
    </Flex>
  );
}

export default GraphqlDemo;
