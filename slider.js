jQuery(document).ready(function($){

// move left
$('#prev').click(function(){
	var animWidth = $('.itemBox').width();
	$('.slides').css({"margin-left":"-"+animWidth});
	$('.slides > div:last').prependTo($('.slides'));
	$('.slides').animate({"margin-left" : "+="+animWidth}, 500, 'easeOutExpo', function(){
			
		$('.slides').css({"margin-left":"0px"});
	});

});


//move right
$('#next').click(function(){
	var animWidth = $('.itemBox').width();
	$('.slides').animate({"margin-left" : "-="+animWidth}, 500, 'easeOutExpo', function(){
		$('.slides > div:first').appendTo($('.slides'));
		$('.slides').css({"margin-left":"0px"});

	});

});

//hover start
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
		$('#slideItem-5 .more').animate({"padding-right":"25px"},100, "swing");
	
	}
	,
	function(){
		$('#slideItem-5 > div:first').animate({"margin-top":"280px", "height": "160px"},100, "swing");
		$('#slideItem-5 .more').animate({"padding-right":"15px"},100, "swing");
	}
);
//hover end


$('.contentWrap').click(expand);
$('.close').click(contract);

//expands container and shows contents
function expand(){

	$('.itemContent').animate({"overflow" : "visible", "width" : "660px"}, 500,'easeOutExpo');
	$('.itemBox').animate({"display":"block","width":"990px"}, 500,'easeOutExpo');
	$('.slides').css({"width":"4950"});
	$('.more').css({"display":"none","width":"0px"});
	$('.close').css({"display":"inline"});
}


//closes container and hides contents
function contract(){
	$('.itemContent').animate({"overflow" : "hidden", "width" : "0px"}, 200,'easeOutExpo');
	$('.itemBox').css({"width":"320px"},200,'easeOutExpo');
	$('.slides').css({"width":"200%"});
	$('.more').css({"display":"block"}).animate({"width":"37px"}, 200, 'easeOutExpo');
	$('.close').css({"display":"none"});
}

//start open
function dispShow($idx){

}

//end open
});