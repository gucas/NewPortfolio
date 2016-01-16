$(document).ready(function(){
	$('.burger-btn').click(function(){
		$(this).toggleClass('active');
		$('.nav-box').toggleClass('active');
	});
});
