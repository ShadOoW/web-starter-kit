import React from 'react';

// Layout
import { Flex, Div } from 'layout';

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
        <Div maxWidth='large' width='100%'>
          <H1 pt={[4, 6]}>About Page</H1>
        </Div>
      </Flex>
    </Flex>
  );
}

export default Home;
