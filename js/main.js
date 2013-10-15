


//$(window).scroll(function() {

   // if ($(this).scrollTop()>0)
  //   {
  //      $('.donate').animate({width: 175 , marginRight: "-60px" }, 15).html("<h4>Donate</h4>").addClass('tilt');
  //      $('.donate').animate({height: 50 }, 15);
        
 //    }
 //   else
//     {
 //     	$('.donate').animate({width: 175 , marginRight: "0px"  }, 15).html("<h4>Make a difference<br /> Donate today</h4>").removeClass('tilt');
 //     	$('.donate').animate({height: 70 }, 15);
 //    }
 //});





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







