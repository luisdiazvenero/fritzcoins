#!/bin/bash
# Set environment variables
export EXPO_ROUTER_APP_ROOT=$(pwd)/app
export NODE_ENV=development
export BABEL_ENV=development
export EXPO_USE_WEBPACK=true

# Start expo with webpack
EXPO_USE_WEBPACK=true npx expo start --web
