import React from 'react';

// Layout
import Container from 'layout/container';
import Content from 'layout/content';

// Typography
import { H1 } from 'typography';

import Header from 'partials';

function Home() {
  return (
    <Container>
      <Header />
      <Content py={[2, 5]}>
        <H1 pt={[4, 6]}>About Page</H1>
      </Content>
    </Container>
  );
}

export default Home;
