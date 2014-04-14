jQuery(document).ready(function($){
var click=1;

$('.more').click(expand);
$('.close').click(contract);

function expand(){
	$('.itemContent').animate({"overflow" : "visible", "width" : "660px"}, 500,'easeOutExpo');
	$('.itemBox').animate({"width":"990px"}, 500,'easeOutExpo');
	$('.slides').css({"width":"4950"});
	$('.more').css({'display':'none'});
	$('.close').css({"display":"inline"});

}

function contract(){
	$('.itemContent').animate({"overflow" : "hidden", "width" : "0px"}, 200,'easeOutExpo');
	$('.itemBox').css({"width":"320px"},200,'easeOutExpo');
	$('.slides').css({"width":"200%"});
	$('.more').css({'display':'block'});
	$('.close').css({"display":"none"});
}



$('#prev').click(function(){
	var animWidth = $('.itemBox').width();

	$('.slides').css({"margin-left":"-"+animWidth});
	$('.slides > div:last').prependTo($('.slides'));
	$('.slides').animate({"margin-left" : "+="+animWidth}, 500, 'easeOutExpo', function(){
			
		$('.slides').css({"margin-left":"0px"});
	});

});

$('#next').click(function(){
	var animWidth = $('.itemBox').width();

	$('.slides').animate({"margin-left" : "-="+animWidth}, 500, 'easeOutExpo', function(){
		$('.slides > div:first').appendTo($('.slides'));
		$('.slides').css({"margin-left":"0px"});

	});

});


$('#slideItem-1').hover(
	function(){
		$('#slideItem-1 > div:first').animate({"margin-top":"260px", "height": "180px"}, 100, "swing");
		$('#slideItem-1 .more').animate({"padding-right":"25px"}, 100, "swing");
	
	}
	,
	function(){
		$('#slideItem-1 > div:first').animate({"margin-top":"280px", "height": "160px"}, 100, "swing");
		$('#slideItem-1 .more').animate({"padding-right":"15px"}, 100, "swing");
	}
);



$('#slideItem-2').hover(
	function(){
		$('#slideItem-2 > div:first').animate({"margin-top":"260px", "height": "180px"},100, "swing");
		$('#slideItem-2 .more').animate({"padding-right":"25px"},"fast");
	
	}
	,
	function(){
		$('#slideItem-2 > div:first').animate({"margin-top":"280px", "height": "160px"},100, "swing");
		$('#slideItem-2 .more').animate({"padding-right":"15px"},100, "swing");
	}
);



$('#slideItem-3').hover(
	function(){
		$('#slideItem-3 > div:first').animate({"margin-top":"260px", "height": "180px"},100, "swing");
		$('#slideItem-3 .more').animate({"padding-right":"25px"},100, "swing");
	
	}
	,
	function(){
		$('#slideItem-3 > div:first').animate({"margin-top":"280px", "height": "160px"},100, "swing");
		$('#slideItem-3 .more').animate({"padding-right":"15px"},100, "swing");
	}
);


$('#slideItem-4').hover(
	function(){
		$('#slideItem-4 > div:first').animate({"margin-top":"260px", "height": "180px"},100, "swing");
		$('#slideItem-4 .more').animate({"padding-right":"25px"},"fast");
	
	}
	,
	function(){
		$('#slideItem-4 > div:first').animate({"margin-top":"280px", "height": "160px"},100, "swing");
		$('#slideItem-4 .more').animate({"padding-right":"15px"},"fast");
	}
);

$('#slideItem-5').hover(
	function(){
		$('#slideItem-5 > div:first').animate({"margin-top":"260px", "height": "180px"},100, "swing");
		$('#slideItem-5 .more').animate({"padding-right":"25px"},"fast");
	
	}
	,
	function(){
		$('#slideItem-5 > div:first').animate({"margin-top":"280px", "height": "160px"},100, "swing");
		$('#slideItem-5 .more').animate({"padding-right":"15px"},100, "swing");
	}
);















});