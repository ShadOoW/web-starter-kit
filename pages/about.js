import React from 'react';

// Layout
import Container from 'layout/container';
import Content from 'layout/content';

import Header from 'partials';

function Home() {
  return (
    <Container>
      <Header />
      <Content py={[2, 5]}>
        About Page
      </Content>
    </Container>
  );
}

export default Home;
