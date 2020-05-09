import React from 'react';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation } from 'lib/i18n';
import { observer } from 'mobx-react';
import Head from 'next/head';

// https://github.com/mobxjs/mobx-react-lite/#observer-batching
import 'mobx-react-lite/batchingForReactDom'

// Services
import { useMobxServices } from 'services';

// Parials
import { Header } from 'partials';

// Layout
import { Container, Content, Flex } from 'layout';

// Typography
import { H3, Text } from 'typography';

// Common
import { Button } from 'common/button';

// Components
import { GraphqlDemo, HTTPDemo } from 'components';

function HomePage({ t, language }) {
  const { languageService } = useMobxServices();

  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Container>
        <Header />
        <Content>
          <H3 pb='2rem'>Introduction</H3>
          <Flex flexDirection='column'>
            <p>
              This is a demo website, to showcase a nextjs starter kit in
              action.
            </p>
            <p>
              Read more about it in the <a href='/readme'>readme page</a>, or on{' '}
              <a href='https://github.com/ShadOoW/web-starter-kit'>github</a>
            </p>
          </Flex>
          <H3 py='2rem'>Translation / CSS Direction</H3>
          <Text bold>{t('Hello')}</Text>
          <Flex pt='1rem' justifyContent='space-between' width='30rem'>
            <Button
              className={language === 'en' ? 'active' : ''}
              onClick={() => languageService.changeLanguage('en')}
              aria-label='Change Language to English'
            >
              English
            </Button>
            <Button
              type='button'
              className={language === 'fr' ? 'active' : ''}
              onClick={() => languageService.changeLanguage('fr')}
              aria-label='Change Language to French'
            >
              French
            </Button>
            <Button
              type='button'
              className={language === 'ar' ? 'active' : ''}
              onClick={() => languageService.changeLanguage('ar')}
              aria-label='Change Language to Arabic'
            >
              Arabic
            </Button>
          </Flex>
          <H3 py='2rem'>i18n aware Routing</H3>
          <Link href='/readme'>
            <a>This link will magically prepend locale subpaths in the url.</a>
          </Link>
          <H3 py='2rem'>Mobx & REST</H3>
          <Flex flexDirection='column'>
            <Text>
              This is a demo to show how to create a <Text bold>mobx</Text>{' '}
              service to retrieve data from a <Text bold>REST Api</Text> and
              generate <Text bold>computed</Text> states based on it.
              <br />
              The last 30 commits of this repository.
            </Text>
            <HTTPDemo />
          </Flex>
          <H3 py='2rem'>GraphQl</H3>
          <Flex flexDirection='column'>
            <Text>
              This is a demo for <Text bold>apollo</Text> and{' '}
              <Text bold>graphql</Text>
            </Text>
            <Text>
              The graphql backend is generously made available by{' '}
              <a href='https://rickandmortyapi.com/'>Axel Fuhrmann</a>
            </Text>
          </Flex>
          <GraphqlDemo />
        </Content>
      </Container>
    </>
  );
}

HomePage.getInitialProps = async ({ mobxServices, req }) => {
  const currentLanguage = req ? req.language : i18n.language;
  await mobxServices.githubService.fetch();
  return {
    language: currentLanguage,
    namespacesRequired: ['common'],
  };
};

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
};

export default withTranslation('common')(observer(HomePage));
