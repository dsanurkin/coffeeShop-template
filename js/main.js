$(document).ready(function() {
  $(function () { objectFitImages() });
  jQuery('.burger').click(function(e) {
    e.preventDefault();
    jQuery('.menu-icon').toggleClass('opened');
    $('.sidebar').toggleClass('sidebar-opened');
  });
  (function($){
    $(window).on("load",function(){
        $(".sidebar").mCustomScrollbar({
          theme:"light-thick",
          setWidth: true
        });
    });
})(jQuery);
});
