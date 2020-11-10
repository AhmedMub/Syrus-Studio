$(function () {

  // $(document).ready(function () {
  //
  //   $(this).scrollTop(0);
  // });

  //navebar scroll
    $('.navbar-light .navbar-nav .nav-link').click(function (e) {

      e.preventDefault();

      $('html, body').animate({

        scrollTop: $($(this).attr('href') + $(this).data('scroll')).offset().top

      }, 1000);
    });

  new WOW().init();  //WOW js

  $('.carousel').carousel({interval: 100000});
  $('.carousel').on('slide.bs.carousel', function () {

    $(this).carousel({
      direction: 'left'
    });
  });

  // Fit Text codes
  $('.responsive-h2').fitText(3, { minFontSize: '23px', maxFontSize: '37.64px' });
  $('.responsive-h3').fitText(1, { minFontSize: '16px', maxFontSize: '21px' });

  var navH = $('nav').innerHeight(),
      winH = $(window).height();

      $('.slider, .slider .carousel-item').height(winH - navH);

//Nice scroll
  $('body').niceScroll({
    cursorcolor: '#E89F10',
    cursoropacitymin: '0.3',
    cursorminheight: '70'
  });

  //lc_lightbox
  $(document).ready(function() {
    var $obj = lc_lightbox('#lcl_elems_wrapper a');
    });

  //Loading Screen

  $(window).on('load', function () {

    setTimeout(function () {

      $('.load-overlay .spinner').fadeOut(500).end().find('.load-overlay').fadeOut(600);

    }, 1500);

  });
  //Loading Screen

  // start Go Up button
      $(window).scroll(function () {

        if ($(this).scrollTop() >= 400) {

          $('.go-up').fadeIn('slow');

        } else {

          $('.go-up').fadeOut('slow');

        }
      });

      $('.go-up').click(function () {

        $('html, body').animate({

          scrollTop: '0'

        }, 500);

      });
  // End Go Up button



});
