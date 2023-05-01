$(document).ready(function(){

  $('.header__burger').click(function(event){
    $('.header__burger,.header__menu-mobile').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('.subs__slider').slick({
    variableWidth: true,
  });

  $('.works__slider1').slick({
    variableWidth: true,
  });
  
  $('.works2__slider2').slick({
    variableWidth: true,
  });

  $('.works3__slider3').slick({
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