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
		$('.contentWrap').parents().css({"display":"block"});
	});

});

//hover start
var indexnum;


$('.cont1').hover(
	function(){
		indexnum=1;
		enter();	
	}
	,
	function(){
		indexnum=1;
		leave();
	}
);

$('.cont2').hover(
	function(){
		indexnum=2;
		enter();	
	}
	,
	function(){
		indexnum=2;
		leave();
	}
);

$('.cont3').hover(
	function(){
		indexnum=3;
		enter();	
	}
	,
	function(){
		indexnum=3;
		leave();
	}
);

$('.cont4').hover(
	function(){
		indexnum=4;
		enter();	
	}
	,
	function(){
		indexnum=4;
		leave();
	}
);

$('.cont5').hover(
	function(){
		indexnum=5;
		enter();	
	}
	,
	function(){
		indexnum=5;
		leave();
	}
);

	function enter(){
		var idxsearch=1;
		
		while(idxsearch<=5){
			if(idxsearch==indexnum){
			$('#slideItem-'+indexnum+' > div:first').animate({"margin-top":"260px", "height": "180px"},100, "swing");
			$('#slideItem-'+indexnum+' .more').animate({"padding-right":"25px"},100, "swing");
			}
		idxsearch++;
		}
		
	}
	
	function leave(){
		var idxsearch=1;
		while(idxsearch<=5){
			if(idxsearch==indexnum){
			$('#slideItem-'+indexnum+' > div:first').animate({"margin-top":"280px", "height": "160px"},100, "swing");
			$('#slideItem-'+indexnum+' .more').animate({"padding-right":"15px"},100, "swing");
			}
		idxsearch++;
		}

	}




//hover end

$('.contentWrap').click(function(){
	var currentBox = $(this).parents($(".contentWrap"));
	$('.itemBox').not(currentBox).css({"display":"none"});
	expand();
});

$('.close').click(dispHide);

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
	$('.itemContent').animate({"overflow" : "hidden", "width" : "0px"}, "slow",'easeOutExpo');
	$('.itemBox').animate({"width":"320px"}, 500, 'easeOutExpo');
	$('.slides').css({"width":"200%"});
	$('.more').css({"display":"block"}).animate({"width":"37px"}, 200,'easeOutExpo');
	$('.close').css({"display":"none"});
}





function dispHide(){
	var loop=1;
		contract();
		while(loop<=5){
			$('#slideItem-'+loop).fadeIn(300).css({"display":"block"});
		loop++;
		}

	}
});