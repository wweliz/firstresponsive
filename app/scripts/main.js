$(window).resize(function(){
	if ($(window).width() <= 1080){	
		$('.square').hide()
	};
    if ($(window).width() >= 1080){	
		$('.square').show()
	}	
});

console.log('Main JS loaded!');