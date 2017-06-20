#!/usr/bin/env bash
set -e # halt script on error 
npm run build
npm install -g netlify-cli
netlify deploy -p ./build -s personal-dev -t $NETLIFYKEY