import React from 'react';
import Head from 'next/head';

// Layout
import { Container, Content } from 'layout';

// Typography
import { H3 } from 'typography';

// Import Partials
import { Header } from 'partials';

function Home() {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Container>
        <Header />
        <Content>
          <H3>About Page</H3>
        </Content>
      </Container>
    </>
  );
}

export default Home;
