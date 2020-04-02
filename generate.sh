#!/bin/bash

git submodule update --init --recursive
cd dot-api/
yarn &&
yarn run build &&
yarn run build:interfaces &&
node index.js
