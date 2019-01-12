$(".logos > .logo3").on("mouseenter", function(){
	$(this).css("height", "50px");
});
$(".logos > .logo3").on("mouseleave", function(){
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

$(".butto").on("mouseenter", function(){
	$(this).css("background", "orange");
});
$(".butto").on("mouseleave", function(){
	$(this).css("background", "#191970");
	$(this).css("color", "#EFEFEF");
});