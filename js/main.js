$(document).ready(function() {
  
  /* Fix Nav
  -------------------------------------------*/
  const $nav = $('nav');
  const $service = $('#service');
  let topOfNav = $nav.offset().top;

  function fixNav() {
    if(window.scrollY >= topOfNav) {
      $service.addClass('fixing-padding');
      $nav.addClass('nav-fix');
    } else {
      $service.removeClass('fixing-padding');
      $nav.removeClass('nav-fix');
    }
  }
  $(window).on('scroll', fixNav);


  /* Parallax Scrolling
  -------------------------------------------*/
  function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#service').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#portfolio').parallax("100%", 0.1);
    $('#blog').parallax("100%", 0.2);
    $('#faq').parallax("100%", 0.1);
    $('#testimonial').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
  }
  initParallax();

  /* Owl Carousel
  -------------------------------------------*/
  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items : 2,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,2]
    });
  });

  /* WOW
  -------------------------------------------*/
  new WOW({ mobile: false}).init();
  
});

