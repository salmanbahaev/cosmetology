$(document).ready(function(){
    
  $("form").submit(function (e) {
    e.preventDefault();
    const form = $(this);
    const str = form.serialize();
    $.ajax({
      type: "POST",
      url: "/send.php",
      data: str,
      success: function (msg) {
        if (msg == 'ok') {
		  form.find('input').val('');
		  form.find('textarea').val('');
          form.find('.message-success').text('Ваше сообщение отправлено').css({
            'display': 'inline-block',
            'margin': '22px 0 0',
            'width': '100%',
            'text-align': 'right',
            'color': 'green',
            'font-size': '22px'
          });
          setTimeout(function () {
            form.find('.message-success').text('');
            form.find('.message-success').removeAttr('style');
          }, 4000);
        }
      }
    });
  });
  
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