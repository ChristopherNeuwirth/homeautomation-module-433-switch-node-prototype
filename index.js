#!/bin/sh
":" //# unix shebang ; exec /usr/bin/env node --harmony "$0" "$@"

//#!/usr/bin/env node --harmony
'use strict';

let pkg = require('./package.json');

console.log('Here we Go! This is version ' + pkg.version);
