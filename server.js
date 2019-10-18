const express = require('express');
const { join } = require('path');
const next = require('next');
const { parse } = require('url');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./src/lib/i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();

  server.use(nextI18NextMiddleware(nextI18next));

  server.use((request, response) => {
    const parsedUrl = parse(request.url, true);
    const { pathname } = parsedUrl;
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname);

      return app.serveStatic(request, response, filePath);
    }

    return handle(request, response, pathname);
  });

  server.get('*', (req, res) => handle(req, res));

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
