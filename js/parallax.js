
$(window).scroll(function(){

    var wScroll = $(this).scrollTop();
  
      $('#parallax_img1').css({
        'transform' : 'translate(0px, '+ wScroll /20 +'%)'
      });
  
      $('#parallax_img2').css({
        'transform' : 'translate(0px, '+ wScroll /30 +'%)'
      });
  
      $('#parallax_img3').css({
        'transform' : 'translate(0px, '+ wScroll /30 +'%)'
      });

      $('#parallax_img5').css({
        'transform' : 'translate(0px, '+ wScroll /30 +'%)'
      });

      $('#parallax_img6').css({
        'transform' : 'translate(0px, '+ wScroll /30 +'%)'
      });

      $('#parallax_img7').css({
        'transform' : 'translate(0px, '+ wScroll /30 +'%)'
      });

      $('#parallax_img8').css({
        'transform' : 'translate(0px, '+ wScroll /30 +'%)'
      });
  
});
  