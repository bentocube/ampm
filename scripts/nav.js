$(document).ready(function () {
	var $toggleButton = $('#toggle'),
		$menu = $('.sm-nav-list');
		$toggleButton.on('click', function(){
			$menu.slideToggle();
		});

});