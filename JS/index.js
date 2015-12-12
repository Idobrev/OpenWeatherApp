function AwsomeEventListener(city){
    console.log('city: ' + city); 
    if (city === undefined || city === ''){
        alert('Моля въведете град!');
        return;
    }
    var wmClient = new WMclient();
    wmClient.sendRequest(city).done(function ( data, textStatus, jqXHR){
		var sticker = new Sticker(data);
		//check if we have too much stickers
		stickerCount = $('#body').children().length;
		if (stickerCount == 4) {
			$('#body').html('');
		}
		console.log($('#select').val());
		var selectedOption = $('#select').val();
		if (selectedOption == 0) {
			alert('Моля изберете опция!');
			return;
		}
		sticker.drawSticker(selectedOption, $('#body'));
    });
}

$(document).ready(function(){
    $('#btn-search').click(function (){
        city = $('#search').val();
        AwsomeEventListener(city);
    });
});