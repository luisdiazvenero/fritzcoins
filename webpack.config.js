const { getDefaultConfig } = require('@expo/webpack-config');
const path = require('path');

module.exports = (env, argv) => {
  const config = getDefaultConfig(env, argv);

  // Configuración para desarrollo local
  if (argv.mode === 'development') {
    config.output.publicPath = 'http://localhost:8081/';
  }

  // Add process polyfill
  config.resolve.alias.process = require.resolve('process/browser');
  config.resolve.alias['expo-router'] = require.resolve('expo-router');

  // Add environment variables
  config.plugins.push({
    apply: (compiler) => {
      compiler.hooks.beforeCompile.tap('EnvironmentPlugin', (params) => {
        process.env.EXPO_ROUTER_APP_ROOT = path.resolve(__dirname, 'app');
        process.env.NODE_ENV = argv.mode;
        process.env.BABEL_ENV = argv.mode;
        process.env.EXPO_USE_WEBPACK = true;
      });
    },
  });

  // Add babel configuration
  config.module.rules.push({
    test: /\.(js|jsx|ts|tsx)$/, // Match JavaScript/TypeScript files
    exclude: /node_modules/,    // Exclude node_modules
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: ['@babel/plugin-transform-runtime'],
      },
    },
  });

  return config;
};
