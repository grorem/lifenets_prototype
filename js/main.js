



$(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.donate').animate({ width: "50px" }, 15);
        $('.tilt').fadeIn(1000);
        $('#don').hide(1);
        
        
     }
    else
     {
      	$('.donate').animate({ width: "175px"  }, 15);
      	$('.tilt').hide(1);
      	$('#don').fadeIn(1000);
      	
     }
 });





$('.donate').mouseenter(function(){

	$('.donate').animate({ width: "175px"  }, 15);
      	$('.tilt').hide(1);
      	$('#don').fadeIn(1000);



}).mouseleave(function(){

	$('.donate').animate({ width: "50px" }, 15);
        $('.tilt').fadeIn(1000);
        $('#don').hide(1);



});


$('ul.navbar-nav').click(function(){

	$('ul.navbar-nav').slideUp(500);
    


});



$('.navbar-toggle').click(function(){

	$('ul.navbar-nav').slideDown(500);
    


});
