'use strict';

// USING FITTEXT JQUERY PLUG-IN //////////////////////
$('h1').fitText();

// USING FITVIDS JQUERY PLUG-IN //////////////////////
		//Note: In order for FitVids to work, your video 
		//must be wrapped in a div tag
$(document).ready(function(){
    $('.myvideo').fitVids();
});

// SHOW AND HIDE USING WINDOW RESIZE /////////////////
$(window).resize(function(){
	if ($(window).width() <= 960){
		$('.catvideo').hide();
	}
    if ($(window).width() >= 960){
		$('.catvideo').show();
	}
});

//////////////////////////////////////////////////////
console.log('Main JS loaded!');