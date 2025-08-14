#!/bin/sh

set -e

_() {
  local path="$1"
  echo "Building in $path"
  rm -rf "$path"
  mkdir -p "$path"
  cd "$path"
  cmake ..
  make
  cd - > /dev/null
}

_ ./cdn/static/build
_ ./html/build
_ ./back/build
