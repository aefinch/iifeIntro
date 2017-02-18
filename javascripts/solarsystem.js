var SolarSystem = (function(){

	var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
	var numPlanetsPeopleLandedOn = 0;
	var DwarfPlanets = [];
	var stars = ["Sun", "Alpha Centauri", "Wolf 359"];
	var age = 0;

	return {
		getPlanets: function(){
			return planets;
		},
		getPlanetsLandedPeopleOn: function(){
			return numPlanetsPeopleLandedOn;
		},
		setPlanetsLandedPeopleOn: function(){
			numPlanetsPeopleLandedOn ++;
		},
		
		getDwarfPlanets : function(){
			return "they are the best"
		},
		setDwarfPlanets : function(lumpOfRock){
			dwarfPlanets.push(lumpOfRock);
		},
		getStars : function(){
			return stars;
		},
		setStars: function(newStar){
			stars.push(newStar);
		},
		getSolarSystemAge: function(){
			return age;
		},
		setSolarSystemAge: function(){
			age++;
		}
	}


})();

// console.log("Planets: ", SolarSystem.getPlanets());
// console.log("Planets with people: ", SolarSystem.getPlanetsLandedPeopleOn());
// SolarSystem.setSpaceships("Voyager 1");
// SolarSystem.setSpaceships("Voyager 2");
// SolarSystem.setSpaceships("Gemini");
// SolarSystem.setSpaceships("Apollo");
// console.log("Spaceships: ", SolarSystem.getSpaceships());
