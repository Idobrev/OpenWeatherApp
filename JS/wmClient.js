function WMclient () {
    this.sendRequest = function (city){
        return $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=8ae24fa951cd7bcd153b277028369905&lang=bg',
            method: "POST",
            data: { 
                q : city,
                APPID : '8ae24fa951cd7bcd153b277028369905',
                lang : 'bg'
            },
            dataType: "json"
            
        });
    };
};