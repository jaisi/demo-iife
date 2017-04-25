console.log("light");

var lightSide = (function(originalStarwars){
	var location = "D'Qar";
	var keyPlayers = ["princess leia", "hans solo", "chewbacca", "admiral ackbar", "jar jar bin"];
	var jedi = ["luke skywalker", "yoda", "obi-wan kenobi","anakin skywalker", "mace windu"];
	
	originalStarwars.getLocation = function(whoAsks){
		console.log("whoAsks", whoAsks);
		let tell = true;
		let evilPlayes = starWars.getEvil();
		evilPlayes.forEach(function(item){
			if(item === whoAsks)
				tell = false;
		});

		if (tell){
			console.log(whoAsks, "is on the good side. Location: ", location);
		} else {
			console.log("you are evil, cannot tell you");
		}

	};

	originalStarwars.addJedi = function(who){
		jedi.push(who);
		console.log("jedi list: ", jedi);

	};

	originalStarwars.setPlayer = function(who){
		keyPlayers.push(who);
		console.log("players list", keyPlayers);
	};

	originalStarwars.removeJedi=function(who, name){
		var whichIndex;
		jedi.forEach(function(item, index){
			if(item === who){
				whichIndex = index;
			}
		});

		jedi.splice(whichIndex,1);
		console.log("jedi after death", jedi);

		if(name){
			starWars.setEvil(name);
		}
	};

	return originalStarwars;

})(starWars);