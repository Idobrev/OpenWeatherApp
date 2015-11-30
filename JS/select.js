$('#select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.html('<div id="selected">' + $this.children('option').eq(0).text() + '</div><div id="arrow"></div>');
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $activeFlag = $(this).attr('class');
        $(this).toggleClass('active');
        $('#arrow').toggleClass('arrow-active');
        $('div.select-styled.active').each(function(){
            $(this).next('ul.select-options').hide(200);
        });
        $(this).next('ul.select-options').toggle(200);
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $("#selected").text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
    
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $('#arrow').removeClass('arrow-active');
        $list.hide(200);
    });

});