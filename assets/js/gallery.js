var num = 0, num2=0;
setInterval(function() {
	if(num>8){num=0;}
	$(".imag").animate({
		t1 : $(".imag").children().fadeOut(500),
		t2 : $("."+num++).fadeIn(500)
	} , 800);  }, 3000); 

$(".imag").children().on("click", function(){ 
if(num>8){num=0;}
$(this).fadeOut(500);
$("."+num++).fadeIn(500);
});
$(".list > ul > li").on("mouseenter", function(){
	$(this).css("background", "pink");
});
$(".list > ul > li").on("mouseleave", function(){
	$(this).css("background", "white");
});
$(".list > ul > li:first-of-type").on("mouseenter", function(){
	$(this).css("background", "#EFEFEF");
});
$(".logos > a >.logo3").on("mouseenter", function(){
	$(this).css("height", "50px");
});
$(".logos > a > .logo3 ").on("mouseleave", function(){
	$(this).css("height", "45px");
});
$(".logos > a > .logo4").on("mouseenter", function(){
	$(this).css("height", "50px");
});
$(".logos > a > .logo4").on("mouseleave", function(){
	$(this).css("height", "45px");
});
$("button").on("mouseenter", function(){
	$(this).css("background", "orange");
});
$("button").on("mouseleave", function(){
	$(this).css({'background': '#EFEFEF', 
		'color' : 'black'
	});
});
$(".col").on("mouseleave", function(){
	$(this).css({'background': '#191970', 
		'color' : 'black'
	});
});
$(".coursepic").on("mouseenter", function(){
	$(this).css("margin", "0px");
});
$(".coursepic").on("mouseleave", function(){
	$(this).css("background", "#EFEFEF");
});
$(".courses > ul > li").on("mouseenter", function(){
	$(this).css("background", "#87CEFA");
	$(this).children().css("background", "#87CEFA");
});
$(".courses > ul > li").on("mouseleave", function(){
	$(this).css("background", "#EFEFEF");
	$(this).children().css("background", "#EFEFEF");
});
$(".courses > ul > li > button").on("mouseleave", function(){
	$(this).css("background", "#87CEFA");
});
$(".pics > li > img").on("mouseenter", function(){
	$(this).css({'background' : 'red'});
});
$(".pics > li > img").on("mouseleave", function(){
	$(this).css({'background' : 'white'});
});
$(".butto").on("mouseenter", function(){
	$(this).css("background", "orange");
});
$(".butto").on("mouseleave", function(){
	$(this).css("background", "#191970");
	$(this).css("color", "#EFEFEF");
});

$(".university > li ").on("mouseenter", function(){
	$(this).children(".ani").animate({ 'marginTop' : "-=180px"});
	$(this).children(".ani").css({ 'position' : "relative", 'text-align' : "center"});
	$(this).children("img").animate({ 'marginTop' : "+=50px", 'opacity' : "0.3" });
});
$(".university > li").on("mouseleave", function(){
	$(this).children(".ani").animate({ 'marginTop' : "+=180px" });
	$(this).children(".ani").css({ 'position' : "relative", 'text-align' : "center" });
	$(this).children("img").animate({ 'marginTop' : "-=50px", 'opacity' : "1" });
});


/*
$(document).ready(function(){

setTimeout(next, 1000);

/*
$("img").on("click", function(){
$(this).fadeOut(500);
$("."+number1).fadeIn(500);
//$(this).html("<img src='assets/images/"+number1+".png'>", function(){
//	$(this).fadeIn(5);
});
//$("."+number1).fadeOut(5);$("."+number2).fadeIn(5);
//});
*/
