import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ClientContext } from 'graphql-hooks';

import withGraphQLClient from 'lib/with-graphql-client';

import GlobalStyle from 'styles/GlobalStyle';
import theme from 'styles/theme';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, graphQLClient } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
            <ClientContext.Provider value={graphQLClient}>
              <Component className={pageProps.theme} {...pageProps} />
            </ClientContext.Provider>
          </>
        </ThemeProvider>
      </Container>
    );
  }
}

export default withGraphQLClient(MyApp);
