module.exports = {
  build: {
    env: {
      EXPO_ROUTER_APP_ROOT: 'app',
      NODE_ENV: 'production',
      BABEL_ENV: 'production',
      EXPO_USE_WEBPACK: 'true'
    }
  },
  output: 'dist'
};
