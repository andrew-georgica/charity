
$(document).ready(function() {
    $('.arrow_top').click(function(){
       $('html, body').animate({scrollTop:$('#menu_section').position().top - 300}, 1000);
    });
    $('#link_2').click(function(){
       $('html, body').animate({scrollTop:$('#footer_section').position().top - 350}, 1000);
    });
    $('#link_3').click(function(){
        $('html, body').animate({scrollTop:$('#insert').position().top + 500}, 1000);
    });
    $('#link_4').click(function(){
        $('html, body').animate({scrollTop:$('#insert').position().top + 500}, 1000);
    });
    $('#link_5').click(function(){
        $('html, body').animate({scrollTop:$('#insert').position().top + 500}, 1000);
    });
    $('#link_6').click(function(){
        $('html, body').animate({scrollTop:$('#insert').position().top + 500}, 1000);
    });
    // $('#link_7').click(function(){
    //    $('html, body').animate({scrollTop:$('#product_section').position().top - 150}, 1000);
    // });
    // $('#link_8').click(function(){
    //    $('html, body').animate({scrollTop:$('#contacts_section').position().top - 200}, 1000);
    // });
});
