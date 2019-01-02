(function ($) {
    "use strict";

    $(document).ready(function () {
        var $container = $('#projects-feed'),
            containerWidth = $container.outerWidth();

        $container.masonry({
            itemSelector: '.project',
            columnWidth: function (containerWidth) {
                if (containerWidth <= 330) {
                    return 310;
                } else {
                    return 330;
                }
            },

            isAnimated: !Modernizr.csstransitions
        });
    });

})