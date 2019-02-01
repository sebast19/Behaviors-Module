/**
 * @file
 * Contains the definition of the behaviour examples.js.
 */

(function ($, Drupal, drupalSettings) {

  'use strict';

  /**
   * Attaches the JS test behavior of first example.
   */
  Drupal.behaviors.exampleOne = {
    attach: function (context, settings) {
      console.log('hola 1');
      $('.do-event', context).click(function () {
        $('.container .container-wrapper > h2').toggle('slow');
      });
    }
  };

  /**
   * Attaches the JS test behavior of second example.
   */
  Drupal.behaviors.exampleTwo = {
    attach: function (context, settings) {
      console.log('hola 2');
      $('.select-size', context).change(function () {

        var select_value = $(this).val();

        switch(select_value){
          case 'small':
            $('.container-wrapper2  img').css({
              'width': '300px',
              'height': '250px',
              'margin': 'auto'
            });

            break;

          case 'medium':
            $('.container-wrapper2  img').css({
              'width': '580px',
              'height': '450px',
              'margin': 'auto'
            });

            break;

          case 'large':
            $('.container-wrapper2  img').css({
              'width': '940px',
              'height': '530px',
              'margin': 'auto'
            });

            break;

           default:
            $('.container-wrapper2  img').css({
              'width': 'auto',
              'height': 'auto'
            });


            break; 
        }
        
      });
    }
  };

  /**
   * Attaches the JS test behavior of third example.
   */
  Drupal.behaviors.exampleThree = {
    attach: function (context, settings) {

      console.log('hola 3');

      var imgItems = $('.slider li').once('countitems').length;
      var imgPos = 1;

      for (var i = 1; i <= imgItems; i++) {
          $('.pagination').append('<li><span class="icon-minus"></span></li> ');
      }

      $('.slider li').hide();
      $('.slider li:first').show();
      $('.pagination li:first').css({'color': '#cd6e2e'});

      // Run all functions ====================================================

      $('.pagination li').click(pagination);
      $('.right span').once('nextslider').click(nextSlider);
      $('.left span').once('prevslider').click(prevSlider);
      
      // Functions. ==========================================================
      
      // Function Pagination --------------------------------------------------------------------------
      function pagination() {
        var  paginationPos = $(this).index() + 1;

        $('.slider li').hide();
        $('.slider li:nth-child(' + paginationPos + ')').show();

        $('.pagination li').css({'color': '#858585'});
        $(this).css({'color': '#cd6e2e'});

        imgPos = paginationPos;

      }

      // Function Next Slider ----------------------------------------------------------------------------
      function nextSlider() {

        if (imgPos >= imgItems) { imgPos = 1;}
        else { imgPos++; }

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#cd6e2e'});

        $('.slider li').hide();
        $('.slider li:nth-child(' + imgPos + ')').show();

      }

      // Function Previous Slider ------------------------------------------------------------------------
      function prevSlider() {

        if (imgPos <= 1) { imgPos = imgItems;}
        else { imgPos--; }

        $('.pagination li').css({'color': '#858585'});
        $('.pagination li:nth-child(' + imgPos + ')').css({'color': '#cd6e2e'});

        $('.slider li').hide();
        $('.slider li:nth-child(' + imgPos + ')').show();

      }

    }
  };

})(jQuery, Drupal, drupalSettings);




