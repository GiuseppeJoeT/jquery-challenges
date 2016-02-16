$(document).ready(function() {

 	$("#stream1_btn").on("click", function() {
 		$(".card").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".card").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".card").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	/* Practicing jQuery - Challenge n.1

		-Selectors
		 $('a');
		 $('img');
		 $(".card_image");
		 $("#my_footer");

		 All paragraph tags within the footer
		 $("#my_footer > p ")

		 The first element on the page
		 $("body").first();


		 The last div on the page		
	     $("div:last");

	     The last image on the page
	     $('img:last');

	     All elements with an alt attribute
	     $( "*[alt]" );

	*/
});

/*
  Event handler Test - try it in the console

document.addEventListener("click",function(e)
{ alert("alert from everywhere!") }); */


/* try it on - http://www.irishtimes.com/

document.addEventListener("click",function(e)

var element = e.target;

if(element.tagName == "a" || element.tagName == "span" ) {
	element.style.background = "yellow";
	e.preventDefault();
}
*/