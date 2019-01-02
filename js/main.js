$(document).ready(function () {
  var $container = $(".projects-feed"),
    //   containerWidth = $container.outerWidth();

    $container.imagesLoaded(function () {
      $container.masonry({
        itemSelector: ".project",
        columnWidth: 290,
        animate: true,
        prepend($container)
      });
    });
});

// isAnimated: !Modernizr.csstransitions