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

  $(".focus-container").on("swipeleft", function() {
    moveForward();
  })
  $(".focus-container").on("swiperight", function() {
    moveBack();
  })

  function moveForward() {
    $(".focus-container").next().addClass("focus-container");
    $(".focus-container").next().removeClass("hidden-container");
    $(".focus-container").prev().addClass("hidden-container");
    $(".focus-container").prev().removeClass("focus-container");
    $(".focus-container").next().removeClass("focus-container");
    $(".focus-container").next().addClass("hidden-container");
    if ($(".focus-container").is(':last-child')) {
      $('#front-arrow').css("opacity", "0");
      $('#back-arrow').css("opacity", "1");
    } else {
      $('#front-arrow').css("opacity", "1");
      $('#back-arrow').css("opacity", "1");
    }
  }

  function moveBack() {
    $(".focus-container").prev().addClass("focus-container");
    $(".focus-container").prev().removeClass("hidden-container");
    $(".focus-container").next().addClass("hidden-container");
    $(".focus-container").next().removeClass("focus-container");
    $(".focus-container").prev().removeClass("focus-container");
    $(".focus-container").prev().addClass("hidden-container");
    if ($(".focus-container").is(':first-child')) {
      $('#back-arrow').css("opacity", "0");
      $('#front-arrow').css("opacity", "1");
    } else {
      $('#back-arrow').css("opacity", "1");
      $('#front-arrow').css("opacity", "1");
    }
  }


    // Google Analytics Code
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-87588202-1', 'auto');
    ga('send', 'pageview');


})
