const path = require('path');

module.exports = async ({ config, mode }) => {
  config.resolve.modules = [
    ...(config.resolve.modules || []),
    path.resolve(__dirname, '../'),
    path.resolve(__dirname, '../src'),
  ];

  return config;
};
