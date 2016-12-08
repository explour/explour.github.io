$(document).ready(function() {
  $('#exit-button').click(function(){
    $('.pop-up-wrapper').hide();
  });

  $('#sneak-peak-button').click(function(){
    $('.pop-up-wrapper').css("display", "flex");
  });
})
