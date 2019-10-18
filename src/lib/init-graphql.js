import { GraphQLClient } from 'graphql-hooks';
import memCache from 'graphql-hooks-memcache';
import unfetch from 'isomorphic-unfetch';

// Import Utils
import { isServer } from 'utils';

let graphQLClient = null;

function create(initialState = {}) {
  return new GraphQLClient({
    ssrMode: isServer,
    url: 'https://rickandmortyapi.com/graphql',
    cache: memCache({ initialState }),
    fetch: typeof window !== 'undefined' ? fetch.bind() : unfetch, // eslint-disable-line
  });
}

export default function initGraphQL(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (isServer) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!graphQLClient) {
    graphQLClient = create(initialState);
  }

  return graphQLClient;
}
