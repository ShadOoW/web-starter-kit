import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ClientContext } from 'graphql-hooks';

import withGraphQLClient from 'lib/with-graphql-client';
import { appWithTranslation } from 'lib/i18n';

import { theme, GlobalStyles } from 'styles';

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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <ClientContext.Provider value={graphQLClient}>
            <Component className={pageProps.theme} {...pageProps} />
          </ClientContext.Provider>
        </>
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(withGraphQLClient(MyApp));
