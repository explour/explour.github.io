$(document).ready(function() {
  $('#exit-button').click(function(){
    $('.pop-up-wrapper').hide();
  });

  $('#sneak-peak-button').click(function(){
    $('.pop-up-wrapper').css("display", "flex");
  });

  $('html').keydown(function(e){
    if (e.keyCode == 39) {
      e.preventDefault();
      moveForward();
    }
    if (e.keyCode == 37) {
      e.preventDefault();
      moveBack();
    }
});

  $('#front-arrow').click(function(){
    moveForward();
  });

  $('#back-arrow').click(function(){
    moveBack();
  });

  function moveForward() {
    $(".focus-container").next().addClass("focus-container");
    $(".focus-container").next().removeClass("hidden-container");
    $(".focus-container").prev().addClass("hidden-container");
    $(".focus-container").prev().removeClass("focus-container");
    $(".focus-container").next().removeClass("focus-container");
    $(".focus-container").next().addClass("hidden-container");
  }

  function moveBack() {
    $(".focus-container").prev().addClass("focus-container");
    $(".focus-container").prev().removeClass("hidden-container");
    $(".focus-container").next().addClass("hidden-container");
    $(".focus-container").next().removeClass("focus-container");
    $(".focus-container").prev().removeClass("focus-container");
    $(".focus-container").prev().addClass("hidden-container");
  }




})
