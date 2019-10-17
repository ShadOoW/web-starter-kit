import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { i18n, Link, withTranslation } from 'lib/i18n';

// Parials
import { Header } from 'partials';

// Layout
import { Container, Content, Flex } from 'layout';

// Typography
import { H3, Text } from 'typography';

// Components
import { GraphqlDemo } from 'components';

function Home({ t }) {
  const [language, setLanguage] = useState('');

  useEffect(() => setLanguage(i18n.language), [i18n.language]);

  useEffect(() => {
    if (language.length)
      document
        .getElementsByTagName('html')[0]
        .setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
  }, [language]);

  return (
    <Container>
      <Header />
      <Content>
        <H3 pb='2rem'>Introduction</H3>
        <Flex flexDirection='column'>
          <p>
            This is a demo website, to showcase a nextjs starter kit in action.
          </p>
          <p>
            Read more about it in the <a href='/about'>about page</a>, or on{' '}
            <a href='https://github.com/ShadOoW/web-starter-kit'>github</a>
          </p>
        </Flex>
        <H3 py='2rem'>Translation / CSS Direction</H3>
        <Text bold>
          {i18n.language} - {t('Hello')}
        </Text>
        <Flex pt='1rem' justifyContent='space-between' width='25rem'>
          <button
            type='button'
            className={language === 'en' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('en')}
          >
            English
          </button>
          <button
            type='button'
            className={language === 'fr' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('fr')}
          >
            French
          </button>
          <button
            type='button'
            className={language === 'ar' ? 'active' : ''}
            onClick={() => i18n.changeLanguage('ar')}
          >
            Arabic
          </button>
        </Flex>
        <H3 py='2rem'>i18n aware Routing</H3>
        <Link href='/about'>
          <a>This link will magically prepend locale subpaths in the url.</a>
        </Link>
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
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Home);
