import React from 'react';
import Head from 'next/head';

// Services
import { useMobxServices } from 'services';

// Layout
import { Container, Content } from 'layout';

// Typography
import { H3 } from 'typography';

// Import Partials
import { Header } from 'partials';

// Components
import { Readme } from 'components';

function ReadmePage() {
  const { readmeService } = useMobxServices();

  return (
    <>
      <Head>
        <title>Readme Page</title>
      </Head>
      <Container>
        <Header />
        <Content>
          <H3>Readme Page</H3>

          {readmeService.isLoaded && <Readme source={readmeService.response} />}
        </Content>
      </Container>
    </>
  );
}

ReadmePage.getInitialProps = async ({ mobxServices }) => {
  await mobxServices.readmeService.fetch();
  return {
    namespacesRequired: ['common'],
  };
};

export default ReadmePage;
