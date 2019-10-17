import React from 'react';

// Layout
import { Container, Content } from 'layout';

// Typography
import { H2 } from 'typography';

// Import Partials
import { Header } from 'partials';

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <H2>About Page</H2>
      </Content>
    </Container>
  );
}

export default Home;
