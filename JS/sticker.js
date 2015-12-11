function Sticker(data, targetObject) {
	this.datetime;
	this.humidity;
	this.pressure;
	this.temp;
	this.description;
	this.windTemp;
	this.windSpeed;
	this.country;
	this.cityName;
	this.iconURL;
	
	this.drawSticker = function (data, targetObject){
		
	}
	
	var __construct = function (){
		console.log(data);
		this.dateTime = data.dt;
		this.humidity = data.main.humidity;
		this.pressure = data.main.pressure;
		this.temp 	  = ( data.main.temp - 273.15 );
		this.description = data.weather[0].description;
		this.windTemp = data.wind.deg;
		this.country = data.sys.country;
		this.cityName = data.name;
		this.iconURL = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
	}()
}