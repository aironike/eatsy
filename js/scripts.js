  $(document).ready(function() {

    setTimeout(function() {
    	$( ".push-notification" ).slideDown( 300, function() {
	      $(this).delay(4000).slideUp( 300, function() {
	      });
	    });
    }, 12000);


    
  });