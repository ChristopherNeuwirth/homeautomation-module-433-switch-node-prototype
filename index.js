#!/bin/sh
":" //# unix shebang ; exec /usr/bin/env node --harmony "$0" "$@"

//#!/usr/bin/env node --harmony
'use strict';

let pkg = require('./package.json');
let rpi433    = require('rpi-433'),
    rfSniffer = rpi433.sniffer({
      pin: 2,                     //Snif on GPIO 2 (or Physical PIN 13)
      debounceDelay: 500          //Wait 500ms before reading another code
    }),
    rfEmitter = rpi433.emitter({
      pin: 0,                     //Send through GPIO 0 (or Physical PIN 11)
      pulseLength: 180            //Send the code with a 350 pulse length
    });

//rpi-433 uses the kriskowal's implementation of Promises so,
//if you prefer Promises, you can also use this syntax :
rfEmitter.sendCode(5575987, {pin: 0, pulseLength: 179})
  .then(function(stdout) {
    console.log('Code sent: ', stdout);
  }, function(error) {
    console.log('Code was not sent, reason: ', error);
  });


console.log('switch version ' + pkg.version);
