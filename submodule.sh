#!/usr/bin/env bash

cd app/camera/code/f
git add .
git commit -m "a"
git push -u origin main

cd ../../perfobyte/code/f
git add .
git commit -m "a"
git push -u origin main

cd ../../call/code/f
git add .
git commit -m "a"
git push -u origin main