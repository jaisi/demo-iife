(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function add(a,b){
	return a+b;
}

module.exports = add;
},{}],2:[function(require,module,exports){
"use strict";

console.log("hello dark side");


var location = "The Unknown Regions";
var keyplayers = ["Count Dooku", "Darth Maul","General Grievous", "Greedo", "Jango Fett", "Darth Sidious"];


let getEvil = function(){
	console.log("Evil list of players", keyplayers);
	return keyplayers;
};

let setEvil = function(who){
	keyplayers.push(who);
	console.log("keyplayers", keyplayers);
};

module.exports = {getEvil, setEvil};




// turned to dark side: Kylo Ren from Ben Solo and Darth Vader from Anakin Skywalker
},{}],3:[function(require,module,exports){
"use strict";
console.log("hello light side");

let darkside = require("./dark.js");


var location = "D'Qar";
var keyplayers = ["Princess Leia Organa", "Han Solo", "Chewbacca", "Admiral Ackbar", "Captain Verrack", "Jar Jar Binks", "Lando Calrissian", "Poe Dameron"];
var jedi = ["Luke Skywalker", "Yoda", "Obi-Wan Kenobi", "Anakin Skywalker", "Mace Windu"];


let addJedi = function(who){
	jedi.push(who);
};

let getJedi = function(){
	return jedi;
};

let getPlayer = function(){
	console.log("getPlayer light", keyplayers);
	return keyplayers;
};

let setPlayer = function(who){
	keyplayers.push(who);
};

let removeJedi = function(who, name){
	//jedi will either die or go to dark side
	//when go to dark side, gets new name
	
	var whichIndex;
	jedi.forEach(function(item, index) {
		if (item === who){
			whichIndex = index;
		}
	});
	jedi.splice(whichIndex, 1); 
	console.log("jedi after death", jedi);
	//if dead, no new name
	if (name){
		//going to dark side results in new name
		darkside.setEvil(name);
	}
};

let getLocation = function(whoAsks){
	console.log("whoAsks", whoAsks);
	var tell = true;
	let evilPlayers = darkside.getEvil();
	evilPlayers.forEach(function(item) {
		if (item === whoAsks){
			tell = false;
		}
	});
	
	if (tell){
		console.log("location", location);
		return location;
	}else {
		var message = "You're evil, can't tell you";
		console.log("message", message);
		return message;
	}
};

module.exports = {addJedi, getJedi, getPlayer, setPlayer, removeJedi, getLocation};


},{"./dark.js":2}],4:[function(require,module,exports){
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
},{"./dark":2,"./light":3,"./math.js":5,"./test.js":8}],5:[function(require,module,exports){
"use strict";

let adding = require("./add"); //<---note that we must call adding, not the original 'add'.
let subtract = require("./subtract");
let multiply = require("./multiply");

let Calculator = {
  adding,
  subtract,
  multiply
};

module.exports = Calculator; 
},{"./add":1,"./multiply":6,"./subtract":7}],6:[function(require,module,exports){
"use strict";

function multiply(a,b) {
  return a * b;
}

module.exports = multiply;


},{}],7:[function(require,module,exports){
"use strict";

function subtract(a,b) {
  return a - b;
}

module.exports = subtract;
},{}],8:[function(require,module,exports){
"use strict";

console.log("hello test.js");

let happy = true;

function getHappy(){
	return happy;
}

module.exports = {getHappy}; //export the functions within {} as part of the module, basically specify all the functions we will use as part of this application
},{}]},{},[4]);
