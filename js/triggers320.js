$(document).ready(function(){
	$(".menu-trigger").click(function(){
		$(".menu").slideToggle(400, function(){
			$(this).toggleClass("menu-expanded").css('display', '');
		});
	});
		
		$(".search-trigger").click(function(){
			$(".search").slideToggle();
			$(".search-field").focus();
		});
		

	$("#button").click(function() {
		$('html, body').animate({
			scrollTop: $(".topp").offset().top
		}, 500);
	});

	$(".aboutus").click(function() {
		$('html, body').animate({
			scrollTop: $(".content").offset().top
		}, 500);
	});

	$(".ourwork").click(function() {
		$('html, body').animate({
			scrollTop: $(".content-third").offset().top
		}, 500);
	});

	$(".contact").click(function() {
		$('html, body').animate({
			scrollTop: $(".footer").offset().top
		}, 500);
	});
	
});

