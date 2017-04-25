console.log("i am here");

//let getLocation = document.getElementById("btn-checkObject"); //let can only be instantiated once
//getLocation.addEventListener("click", function(){
//	console.log("hey darth we are located at: ", resistanceLocation);
//})

let objButton = document.getElementById("btn-checkObject");
objButton.addEventListener("click", introduceStarwars);

function introduceStarwars(event){
	console.log("star wars iife", starWars);
}

let locbtn = document.getElementById("btn-getRLocation");
locbtn.addEventListener("click", function(){
	starWars.getLocation(locbtn.getAttribute("whoIsIt"));
});

let locbtn2 = document.getElementById("btn-getRLocation2");
locbtn2.addEventListener("click", function(){
	starWars.getLocation(locbtn2.getAttribute("whoIsIt"));
});

let addPlayer=document.getElementById("btn-signup");
addPlayer.addEventListener("click", function(){
	let newPlayerName = document.getElementById("newperson").value;

	var whichselected;
	var radios = document.getElementsByName("whichside");
	for (var i=0; i<radios.length; i++){
		if(radios[i].checked){
			whichselected = radios[i].value;
			break;
		}
	}
	console.log("whichselected", whichselected);
	if (whichselected == 0){
		starWars.addJedi(newPlayerName);
	} else if(whichselected == 1){
		starWars.setPlayer(newPlayerName);
	}else if(whichselected == 2){
		starWars.setEvil(newPlayerName);
	}
});
						
let removeJedi = document.getElementById("btn-removeanakin");
removeJedi.addEventListener("click", function(){
	starWars.removeJedi("anakin skywalker", "darth vader");
});

let removeJedi2 = document.getElementById("btn-removeobiwan");
removeJedi2.addEventListener("click", function(){
	starWars.removeJedi("obiwan kenobi");
});