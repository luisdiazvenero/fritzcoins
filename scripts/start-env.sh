#!/bin/bash
# Set environment variables
export EXPO_ROUTER_APP_ROOT="app"
export NODE_ENV="development"
export BABEL_ENV="development"
export EXPO_USE_WEBPACK="true"

# Start expo with these environment variables
EXPO_NO_TELEMETRY=1 expo start --clear
