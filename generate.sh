#!/bin/bash

git submodule update --init --recursive
cd dot-api/
yarn &&
yarn run build &&
yarn run build:interfaces &&
cd ../
node index.js
