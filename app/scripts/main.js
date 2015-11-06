$(function(){
	'use strict';

	//Nav bar
	var menu = $('nav.mobile').css('display','none');
	var img = $('#logo-responsive');   

	$(img).on('click', function(){
		var $that = $(this);
		$($that).toggleClass('rotate');



		//conditionals
		if($($that).hasClass('rotate')){
			$($that).removeClass('reverse');
			$(menu).slideDown('fast');
		
		} else{
			$($that).addClass('reverse');
			$(menu).slideUp('fast');
		}

	});
});