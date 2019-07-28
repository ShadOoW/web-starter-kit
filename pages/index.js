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
      <Content py={[2, 5]}>
        <HelloWorld name='World!' />
        {process.env.env}
      </Content>
    </Container>
  );
}

export default Home;
