const dateNowFormattedET = function(){	
	let timeNow = new Date();
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	return timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const weekDayNowET= function(){
	let timeNow = new Date();
	const weekdayNamesEt = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäv", "neljapäev", "reede", "laupäev"];
	return weekdayNamesEt[timeNow.getDay()];
}	
	
const partOfDay = function(){
	let dayPart = "suvaline aeg";
	let hourNow = new Date().getHours();
	if(hourNow <= 6){
	 	dayPart = "varahommik";
	} else if (hourNow < 12){
		dayPart = "hommik";
	} else if (hourNow == 12){
		dayPart = "keskpäev";
	}	
	return dayPart;
}	


//ekspordin kõik vajaliku
module.exports = {fullDate: dateNowFormattedET, weekDay: weekDayNowET};
