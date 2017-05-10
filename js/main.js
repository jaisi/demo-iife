"use strict";

console.log("i am in main.js");

let test = require('./test.js');

console.log("test", test);
console.log("test.happy", test.getHappy());

let MathModule = require('./math.js');
console.log("MathModule", MathModule);
console.log("adding", MathModule.adding(3,5));

///// real stuff

// let $ = require('lib/node_modules/jquery/dist/jquery');
let lightside = require('./light'),
darkside = require('./dark');