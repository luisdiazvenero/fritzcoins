const { getDefaultConfig } = require('@expo/webpack-config');

module.exports = (env, argv) => {
  const config = getDefaultConfig(env, argv);

  // Add process polyfill
  config.resolve.alias.process = require.resolve('process/browser');
  config.resolve.alias['expo-router'] = require.resolve('expo-router');

  // Add environment variables
  config.plugins.push({
    apply: (compiler) => {
      compiler.hooks.beforeCompile.tap('EnvironmentPlugin', (params) => {
        process.env.EXPO_ROUTER_APP_ROOT = path.resolve(__dirname, 'app');
        process.env.NODE_ENV = 'development';
        process.env.BABEL_ENV = 'development';
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
