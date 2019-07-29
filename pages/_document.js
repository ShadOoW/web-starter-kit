import React from 'react';
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { parseCookies } from 'nookies';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
      });

      const initialProps = await Document.getInitialProps(ctx);

      const cookies = parseCookies(ctx);
      initialProps.theme = cookies.theme;

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html className={this.props.theme}>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/static/manifest/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/static/manifest/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/manifest/favicon-16x16.png' />
          <link rel='manifest' href='/static/manifest/site.webmanifest' />
          <link rel='mask-icon' href='/static/manifest/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='apple-mobile-web-app-title' content='Web Starter Kit' />
          <meta name='application-name' content='Web Starter Kit' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
