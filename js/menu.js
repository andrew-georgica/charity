
// $('#toggle').click(function() {
//    $(this).toggleClass('active');
//    $('#overlay').toggleClass('open');
//   });

(function($) {
  $(function() {
    $('#toggle').click(function() {
      $('body').toggleClass('hidden_small_screen');
      $('#overlay').toggleClass('open');
      $(this).toggleClass('active');
    });
    $('#overlay nav li a').click(function() {
      $('#overlay').toggleClass('open');
    });
  });
})(jQuery);


// function calcVH() {
//     $('.overlay').innerHeight( $(this).innerHeight() );
// }
// (function($) {
//   calcVH();
//   $(window).on('orientationchange', function() {
//     calcVH();
//   });
// })(jQuery);
