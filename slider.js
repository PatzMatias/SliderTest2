jQuery(document).ready(function($){
var click=1;

$('.more').click(function(){
if(click==1){
	$('.itemContent').animate({"overflow" : "visible", "width" : "660px"},"slow");
click++;
}

else{
	$('.itemContent').animate({"overflow" : "hidden", "width" : "0px"},"slow");
	click--;
}

});

$('.itemBox').hover(function(){
	$('.contentWrap').animate({"margin-top" : "260px", "height": "180px"}, 800);
	});


$('.itemBox').mouseleave(function(){
	$('.contentWrap').animate({"margin-top" : "280px","height": "160px"}, 800);
	});

});