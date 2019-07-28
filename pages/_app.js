import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'styled-components';

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
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Component className={pageProps.theme} {...pageProps} />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
