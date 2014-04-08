jQuery(document).ready(function($){
var click=1;

$('.more').click(function(){
if(click==1){
	$('.itemContent').animate({"overflow" : "visible", "width" : "660px"}, "fast");
click++;
}

else{
	$('.itemContent').animate({"overflow" : "hidden", "width" : "0px"}, "fast");
	click--;
}

});

$('#prev').click(function(){
	$('.slides').animate({"margin-left" : "+=330px"}, 500, 'linear', function(){
		$('.slides div:first').appendTo($('.slides:last'));

	});

});

$('#next').click(function(){
	$('.slides').animate({"margin-left" : "-=330px"}, 500, 'linear', function(){
		$('.slides div:last').prependTo($('.slides:first'));

	});

});




});