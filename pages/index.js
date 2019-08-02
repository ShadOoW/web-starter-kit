import React from 'react';

import withData from 'lib/apollo';

// Layout
import { Flex, Div } from 'layout';

// Parials
import { Header } from 'partials';

// Components
import { GraphqlDemo } from 'components';

// Typography
import { H2 } from 'typography';

function Home() {
  return (
    <Flex
      flexDirection='column'
    >
      <Header />
      <Flex
        p={[2, 4]}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Div maxWidth='large' width='100%'>
          <H2>What is this?</H2>
          <p>
            This is a demo website, to showcase a nextjs starter kit in action.<br />
            Read more about it in the <a href='/about'>about page</a>, or on <a href='https://github.com/ShadOoW/web-starter-kit'>github</a>
          </p>
          <H2 pt={[4, 5]}>Rick and Morty</H2>
          <p>
            This is a demo for apollo and graphql<br />
            The graphql backend is generously made available by <a href='https://rickandmortyapi.com/'>Axel Fuhrmann</a>
          </p>
          <GraphqlDemo />
        </Div>
      </Flex>
    </Flex>
  );
}

export default withData(Home);
