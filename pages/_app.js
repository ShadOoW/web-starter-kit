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

    // On server-side, this runs once and creates new services
    // On client-side, this always reuses existing services

    const cookies = parseCookies(ctx);

    const mobxServices = getServices({
      language: cookies['next-i18next'] || i18n.language,
    });

    // Make services available to page's `getInitialProps`
    ctx.mobxServices = mobxServices;

    // Call "super" to run page's `getInitialProps`
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // Gather serialization-friendly data from services
    const initialData = {
      language: mobxServices.languageService.data(),
      github: mobxServices.githubService.data(),
    };

    // Pass initialData to render
    return { pageProps, initialData };
  }

  render() {
    const { Component, pageProps, graphQLClient, initialData } = this.props;

    // During SSR, this will create new Service instances so having `initialData` is crucial.
    // During the client-side hydration, same applies.
    // From then on, calls to `getServices()` return existing instances.
    const services = getServices(initialData);

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <ClientContext.Provider value={graphQLClient}>
            <ServiceProvider value={services}>
              <Component {...pageProps} />
            </ServiceProvider>
          </ClientContext.Provider>
        </>
      </ThemeProvider>
    );
  }
}

export default appWithTranslation(withGraphQLClient(MyApp));
