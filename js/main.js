$(function () {

  // Vars.
  var $window = $(window),
    $body = $('body'),
    $wrapper = $('#wrapper'),
    $thumbnails = $('.thumbnails');

  // Breakpoints.
  skel.breakpoints({
    xlarge: '(max-width: 1680px)',
    large: '(max-width: 1280px)',
    medium: '(max-width: 980px)',
    small: '(max-width: 736px)',
    xsmall: '(max-width: 480px)'
  });

  // Disable animations/transitions until everything's loaded.
  $body.addClass('is-loading');

  $window.on('load', function () {
    $body.removeClass('is-loading');
  });

  // Poptrox.
  $window.on('load', function () {

    $thumbnails.poptrox({
      onPopupOpen: function () {
        $body.addClass('is-covered');
      },
      onPopupClose: function () {
        $body.removeClass('is-covered');
      },
      baseZIndex: 1000,
      useBodyOverflow: false,
      usePopupEasyClose: true,
      overlayColor: '#000000',
      overlayOpacity: 0.75,
      popupLoaderText: '',
      fadeSpeed: 500,
      usePopupDefaultStyling: false,
      windowMargin: (skel.breakpoint('small').active ? 5 : 50)
    });

  });

  $(document).ready(function () {

    $('.cropped-images img').each(function () {
      if ($(this).width() > $(this).height()) {
        $(this).addClass('landscape');
      }
    });

  });

  var height_diff = $(window).height() - $('body').height();
  if (height_diff > 0) {
    $('footer').css('margin-top', height_diff);
  }

});