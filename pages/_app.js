import React from 'react';
import App from 'next/app';
import { parseCookies } from 'nookies';
import { ThemeProvider } from 'styled-components';
import { ClientContext } from 'graphql-hooks';
import { getServices, ServiceProvider } from 'services';

import withGraphQLClient from 'lib/with-graphql-client';
import { i18n, appWithTranslation } from 'lib/i18n';

import { theme, GlobalStyles } from 'styles';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // On server-side, this runs once and creates new stores
    // On client-side, this always reuses existing stores

    const cookies = parseCookies(ctx);

    const mobxServices = getServices({
      language: cookies['next-i18next'] || i18n.language,
    });

    // Make stores available to page's `getInitialProps`
    ctx.mobxStores = mobxServices;

    // Call "super" to run page's `getInitialProps`
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Gather serialization-friendly data from stores
    const initialData = {
      language: mobxServices.languageService.data(),
    };

    // Pass initialData to render
    return { pageProps, initialData };
  }

  render() {
    const { Component, pageProps, graphQLClient, initialData } = this.props;

    // During SSR, this will create new store instances so having `initialData` is crucial.
    // During the client-side hydration, same applies.
    // From then on, calls to `getStores()` return existing instances.
    const stores = getServices(initialData);

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <ClientContext.Provider value={graphQLClient}>
            <ServiceProvider value={stores}>
              <Component {...pageProps} />
            </ServiceProvider>
          </ClientContext.Provider>
        </>
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(withGraphQLClient(MyApp));
