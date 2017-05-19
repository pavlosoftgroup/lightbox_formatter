(function ($) {

// Store our function as a property of Drupal.behaviors.
    Drupal.behaviors.lightbox_formatter = {
        attach: function (context, settings) {
            $(".youtube").colorbox({iframe:true, innerWidth:1024, innerHeight:640});
            $(".vimeo").colorbox({iframe:true, innerWidth:500, innerHeight:409});
            $(".iframe").colorbox({iframe:true, width:"80%", height:"80%"});


        }
    };
}(jQuery));
