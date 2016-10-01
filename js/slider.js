sliderInt = 1;
sliderNext = 2;

$(document).ready(function(){
	$('#slider>img#1').fadeIn(300);
	startSlider();
	txt();
});

function startSlider(){
	count =$("#slider >img").length;
	
	loop = setInterval(function(){  //sets a timer loop slideshow interval
		
		if(sliderNext>count){
			sliderNext=1;
			sliderInt=1;
		}
		
		$('#slider > img').fadeOut(300);
		$('#slider > img#'+ sliderNext).fadeIn(300);
		
		sliderInt = sliderNext; 
		sliderNext +=1;
	},3000)
}

function prev(){
	newSlide = sliderInt -1;
	showSlide(newSlide);
}

function next(){
	newSlide = sliderInt +1;
	showSlide(newSlide);
}

function stopLoop(){
	window.clearInterval(loop); // this stops the timer so it doesn't just jump ahead right 
}								// after you hit next and it's on that part of the cycle

function showSlide(id){
	stopLoop(); // stop timer, see above
	if(id>count){ //if id > count it should start the loop again at 1
		id = 1; 
	}else if(id<1){ // if id<1 it can't be zero, it must be the last one (in this case, 4)
		id = count;
	}
	
	$('#slider > img').fadeOut(300);
	$('#slider > img#'+ id).fadeIn(300);
	
	sliderInt = id; 
	sliderNext = id + 1;
	startSlider(); //this restarts the timer
}

$('#slider > img').hover(
	function(){
		stopLoop();
	},
	function(){
		startSlider();
	}
);
function txt(){
	$('img').on('mouseenter', function(){
		$('.hidden').removeClass('hidden').addClass('visible')
	});
	$('img').on('mouseleave', function(){
		$('.visible').removeClass('visible').addClass('hidden')
	});	
	
}