#!/usr/bin/env bash

set -e

esbuild ./f/text/javascript/0.js --bundle --minify --sourcemap --outfile=./f/text/javascript/1.js --target=es2020

# npx postcss ./f/text/css/0.css --use postcss-import --output ./f/text/css/1.css
# lightningcss ./f/text/css/1.css --output-file ./f/text/css/1.css --minify
