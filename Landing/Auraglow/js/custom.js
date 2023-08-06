jQuery.noConflict();
jQuery(document).ready(function () {
    
    'use strict';




    jQuery('.menu_responsive').on('click',function(){
        jQuery('.responsive_none').fadeIn('slow');
    });


    jQuery('.close_menu').on('click', function(){
        jQuery('.responsive_none').fadeOut('slow');
    });

});