var SolarSystem = (function(oldSolarSystem){
	var spaceships = [];
	oldSolarSystem.getSpaceships = function(){
		return spaceships;
	};
	oldSolarSystem.setSpaceships = function (spacecraft){
		spaceships.push(spacecraft);
	};
	oldSolarSystem.wreckSpaceships = function(){
		spaceships.pop();
	};

	return oldSolarSystem;
})(SolarSystem || {});  //augment oldSolarSystem or if it does not exist augment empty object
