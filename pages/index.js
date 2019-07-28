import React from 'react';

// Layout
import Container from 'layout/container';
import Content from 'layout/content';

import Header from 'partials';
import HelloWorld from 'components';

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
