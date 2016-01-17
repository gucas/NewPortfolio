$(document).ready(function(){
	$('.burger-btn').click(function(){
		$(this).toggleClass('active');
		// $('.wrapper-header').toggleClass('active');
		$('.nav-box').toggleClass('active');
	});

	$('.menu-item').click(function(){
		$(this).toggleClass('active');
	});
});
