import React from 'react';
import PropTypes from 'prop-types';

// i18n Libs
import { i18n, Link, withTranslation } from 'lib/i18n';

// Layout
import { Flex, Block, Inline } from 'layout';

// Parials
import { Header } from 'partials';

// Components
import { GraphqlDemo } from 'components';

// Typography
import { H2 } from 'typography';

function Home({ t }) {
  const changeDirection = (direction) => {
    document.getElementsByTagName('html')[0].setAttribute('dir', direction);
  };

  return (
    <Flex
      flexDirection='column'
    >
      <Header />
      <Flex
        p={[2, 4]}
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
      >
        <Block maxWidth='large' width='100%'>
          <H2>What is this?</H2>
          <p>
            This is a demo website, to showcase a nextjs starter kit in action.<br />
            Read more about it in the <a href='/about'>about page</a>, or on <a href='https://github.com/ShadOoW/web-starter-kit'>github</a>
          </p>
          <H2 pt={[3, 4]}>Translation</H2>
          <p><span>Text to be translated: </span><b>{t('Hello')}</b></p>
          <p><span>Current Language: </span><b>{i18n.language}</b></p>
          <br />

          <div>
            <div>Left to right:</div>
            <Inline
              as='button'
              type='button'
              onClick={() => { i18n.changeLanguage('en'); changeDirection('ltr'); }}
              m={3}
            >
              English
            </Inline>
            <Inline
              as='button'
              type='button'
              onClick={() => { i18n.changeLanguage('fr'); changeDirection('ltr'); }}
              m={3}
            >
              French
            </Inline>
          </div>
          <div>
            <div>Right to left:</div>
            <Inline
              as='button'
              type='button'
              onClick={() => { i18n.changeLanguage('ar'); changeDirection('rtl'); }}
              m={3}
            >
              Arabic
            </Inline>
          </div>

          <H2 pt={[3, 4]}>i18n aware Routing</H2>

          A link to navigate to about page,
          with the current selected language in the URL (language/about)
          <br />

          <Link href='/about'>
            <a>This will magically prepend locale subpaths</a>
          </Link>
          <H2 pt={[3, 4]}>Rick and Morty</H2>
          <p>
            This is a demo for apollo and graphql<br />
            The graphql backend is generously made available by <a href='https://rickandmortyapi.com/'>Axel Fuhrmann</a>
          </p>
          <GraphqlDemo />
        </Block>
      </Flex>
    </Flex>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('common')(Home);
