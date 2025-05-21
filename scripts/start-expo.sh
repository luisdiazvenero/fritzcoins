#!/bin/bash
# Set up environment variables
export EXPO_ROUTER_APP_ROOT=$(pwd)/app
export NODE_ENV=development
export BABEL_ENV=development
export EXPO_USE_WEBPACK=true

# Start Expo with webpack
npx expo start --web --config webpack.config.js
