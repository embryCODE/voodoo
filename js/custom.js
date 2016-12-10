/*
  * @package
  * @subpackage template name HTML
  *
  * Template Scripts
  * Created by themeturn

  1. Fixed header
  2. Site search
  3. Main slideshow
  4. Owl Carousel
      a. Testimonial
      b. Clients
      c. Team
  5. Back to top
  6. Skills
  7. BX slider
      a. Blog Slider
      b. Portfolio item slider
  8. Isotope
  9. Animation (wow)
  10. Flickr

*/


jQuery(function($) {
  "use strict";

  $('.navigation').singlePageNav({
    currentClass: 'active',
    changeHash: true,
    scrollSpeed: 750,
    offset: 0,
    filter: ':not(.external)',
    easing: 'swing',

  });

  $.noConflict();
  $('.nav a').on('click', function() {
    if ($('.navbar-toggle').css('display') != 'none') {
      $(".navbar-toggle").trigger("click");
    }
  });



  // prettyphoto

  $("a[data-rel^='prettyPhoto']").prettyPhoto();


  // background carousel

  $('.carousel').carousel({
    interval: 4000
  });

  $('.gallery-carousel').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }, {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
  });

  $('.gallery-carousel').slickLightbox({
    src: 'src',
    itemSelector: 'img'
  });



});
