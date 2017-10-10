function Sticker(data, targetObject) {
		this.dateTime = data.dt;
		this.humidity = data.main.humidity;
		this.pressure = data.main.pressure;
		this.temp = Math.round( data.main.temp - 273.15 );
		this.maxTemp = Math.round( data.main.temp_max - 273.15 );
		this.minTemp = Math.round( data.main.temp_min - 273.15 );
		this.description = data.weather[0].description;
		this.windTemp = data.wind.deg;
		this.windSpeed = data.wind.speed;
		this.country = data.sys.country;
		this.sunset = data.sys.sunset;
		this.sunrise = data.sys.sunrise;
		this.cityName = data.name;
		this.iconURL = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
		this.clouds = data.clouds.all;
		this.longtitute = data.coord.lon;
		this.latitude = data.coord.lat;
		this.rain = data.rain;
	
	this.drawSticker = function (index, obj) {
		var field1;
		var field2;
		var field3;
		var defaultField = '<img src="' + this.iconURL + '"/><br> ' + this.cityName + ', ' + this.country + '. <br>' + this.description;
		
		if (index == 1) {
			var d = new Date();
			var n = d.toLocaleString();
			var sunrise = new Date(this.sunrise * 1000);
			var sunset = new Date(this.sunset * 1000);
			field1 = 'Текущото време: ' + n + '.<br> Изгревът започва в ' + sunrise.toLocaleString() + ', a залеза в ' + sunset.toLocaleString();
			field2 = 'Облачност( в процент ): ' + this.clouds + '%';
			field3 = 'Координати: дължина ' + this.latitude + '/ ширина ' + this.longtitute;
		}
		if (index == 2){
			field1 = 'Темперетура( в целзии ): ' + this.temp + ' градуса<br> Минимална: ' + this.minTemp + ' градуса <br> Максимална: ' + this.maxTemp + ' градуса';
			field2 = 'Атмосферно налягане( в хектопаскали ): ' + this.pressure;
			if (this.rain !== undefined) {
				this.rain = this.rain['3h'];
			}else {
				this.rain = 'Не вали!';
			}
			field3 = 'Дъжд( в кубични метра за последните 3 часа ): ' + this.rain;
		}
		if (index == 3){
			field1 = 'Темперетура( в целзии ): ' + this.temp + ' градуса<br> Минимална: ' + this.minTemp + ' градуса<br> Максимална: ' + this.maxTemp + ' градуса';
			field2 = 'Влажността на въздуха( в процент ): ' + this.humidity;
			field3 = 'Облачност( в процент ): ' + this.clouds + '%';
		}
		var container = '<div class="sticker"><p class="sticker_fields">' + defaultField + '</p><p class="sticker_fields">' + field1 + '</p><p class="sticker_fields" >' + field2 + '</p><p class="sticker_fields" >' + field3 + '</p></div>';
		obj.append(container);
		
		
		return container;
	}
	
}