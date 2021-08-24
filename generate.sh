#!/bin/bash

git submodule update --init --recursive 
git submodule update --remote
cd dot-api/
yarn &&
yarn run build &&
yarn run build:interfaces &&
cd ../
node index.js
