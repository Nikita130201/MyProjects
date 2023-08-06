jQuery(document).ready(function(){

    jQuery('.responsiveBtn').on('click', function(){
        jQuery('.responsiveMenu').fadeIn('fast'); 
    });

jQuery('.close_menu').on('click', function(){
    jQuery('.responsiveMenu').fadeOut('slow');
});


// jQuery('.btnDetail').click(function(){
//     jQuery('.p2').fadeIn('slow');
//     jQuery('.btnDetail').hide();
// })
// jQuery('.btnClose').click(function(){
//     jQuery('.btnDetail').fadeIn('slow');
//     jQuery('.p2').hide();
// })
// jQuery('.box').click(function(){
//     jQuery(this).toggleClass('circle');
// })

});


 