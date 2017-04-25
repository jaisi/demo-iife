console.log("dark");

var starWars = (function(){
	var location = "the unknown regions";
	var keyPlayers = ["count dooku", "darth maul", "general grievous", "greedo", "jango fett", "darth sidous"];
	return {
		getEvil: function(){
			console.log("evil list of player", keyPlayers);
			return keyPlayers;
		},
		setEvil: function(who){
			keyPlayers.push(who);
			console.log("evil players", keyPlayers);
		}
	}

})();
//() invokes the function right now