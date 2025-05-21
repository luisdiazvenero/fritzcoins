#!/bin/bash
# Clean up previous processes
pkill -f "expo" || true
pkill -f "metro" || true

# Clean up cache and reinstall
rm -rf node_modules/.cache .expo .next .cache .babelcache.json
npm cache clean --force
npm install

# Set environment variables
export EXPO_ROUTER_APP_ROOT="app"
export NODE_ENV="development"
export BABEL_ENV="development"
export EXPO_USE_WEBPACK="true"

# Start expo with clean environment
EXPO_NO_TELEMETRY=1 EXPO_PORT=8083 npm run dev
