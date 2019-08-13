import React from 'react';

// Layout
import { Flex, Block } from 'layout';

// Typography
import { H1 } from 'typography';

// Import Partials
import { Header } from 'partials';

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
        <Block maxWidth='large' width='100%'>
          <H1 pt={[2, 4]}>About Page</H1>
        </Block>
      </Flex>
    </Flex>
  );
}

export default Home;
