$(document).ready(function(){

  // smooth scroll

  $(".clickscroll").click(function() {
    var scrollTo = $(this).attr('href');
    console.log(scrollTo);
    $('html, body').animate({
        scrollTop: $(scrollTo).offset().top
    }, 2000);
    $('.clickscroll').removeClass('current_item');
    $(this).toggleClass('current_item');
  });

  $('.accordion_main').click(function(event) {
    $(this).parent('.accordion_item').children('.accordion_content').toggleClass('openaccordion');
  });

});
