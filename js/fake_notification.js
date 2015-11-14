$(document).ready(function() {
  $( ".push-notification" ).slideDown( "slow", function() {
    $(this).delay(5000).slideUp( "slow", function() {
    });
  });
});
