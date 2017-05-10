"use strict";

console.log("hello test.js");

let happy = true;

function getHappy(){
	return happy;
}

module.exports = {getHappy}; //export the functions within {} as part of the module, basically specify all the functions we will use as part of this application