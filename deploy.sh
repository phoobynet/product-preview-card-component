#!/bin/zsh

# This script is used to deploy the website to the server.
npm run build

surge --domain opposite-mark.surge.sh --project ./dist
