const path = require('path')

module.exports = {
  env: {
    env: 'dev',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "babel-loader"
        },
        {
          loader: "react-svg-loader",
          options: {
            jsx: true
          }
        }
      ]
    });

    config.resolve.modules.push(path.resolve('./src'));

    return config;
  },
};
