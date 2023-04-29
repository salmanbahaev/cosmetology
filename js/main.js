$(document).ready(function(){
  $('.subs__slider').slick({
    variableWidth: true,
  });

  $('.feedbackSlider').slick({
    variableWidth: true,
  });

  $(".slide-toggle").click(function(){ 
    $(".in__showed").slideToggle(); 

    $(".in__button-text").toggleClass('in__button-text-toggle');

    $(".in__button-img").toggleClass('in__button-img-toggle');
  });
})