#!/bin/bash
set -o errexit

cd npm && npm install && npm run flow && npm run test-quick && npm run build && node dist/cli.js validate-defs && node dist/cli.js run-tests
