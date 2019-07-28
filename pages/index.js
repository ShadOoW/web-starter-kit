import React from 'react';

// Layout
import Container from '../src/layout/container';
import Content from '../src/layout/content';

import Header from '../src/partials';
import HelloWorld from '../src/components';

function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <HelloWorld name="World!" />
      </Content>
    </Container>
  );
}

export default Home;
