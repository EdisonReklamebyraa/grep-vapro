//Video banner
document.createElement('video');
document.createElement('audio');



$( document ).ready(function() {



    $(window).resize(resize);


    var is = setInterval(resize, 100);

    function resize() {
        var $v = $("#TopVideo .vjs-tech");
        if($v){
            var w = $v.width();
            var h = $v.height();
            $v.css("margin-left", w/2 * -1);
            $v.css("margin-top", h/2 * -1);
            if(is){
                clearInterval(is);
                $v.addClass("loaded");
                is = false;
                $v.get(0).volume = 0.1;
            }

        }
    }




});



//Smooth scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});