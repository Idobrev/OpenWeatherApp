function AwsomeEventListener(city){
    console.log('city: ' + city); 
    if (city === undefined || city === ''){
        alert('Моля въведете град!');
        return;
    }
    var wmClient = new WMclient();
    wmClient.sendRequest(city).done(function ( data, textStatus, jqXHR){
		var sticker = new Sticker(data);
		
    });
}

$(document).ready(function(){
    $('#btn-search').click(function (){
        city = $('#search').val();
        AwsomeEventListener(city);
    });
});