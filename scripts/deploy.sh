#!/usr/bin/env bash
set -e # halt script on error 
npm run build
zip -r website.zip build 
curl -H "Content-Type: application/zip" \
     -H "Authorization: Bearer $NETLIFYKEY" \
     --data-binary "@website.zip" \ https://api.netlify.com/api/v1/sites/mateiradu.me/deploys