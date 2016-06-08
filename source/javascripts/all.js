//= require jquery
//= require bootstrap-sprockets
//= require_tree .
$( document ).ready(function() {


    //=Fonts Typekit
src="https://use.typekit.net/vgk5iyt.js"
try{Typekit.load({ async: true });}catch(e){}
src="https://use.typekit.net/deo6rin.js"
try{Typekit.load({ async: true });}catch(e){}

// Scroll Navbar

// Navbar transition on scroll

$(function(){
  $(window).scroll(function(e){
    if ($(this).scrollTop() > 70) {
      $(".navbar").css({
        "background-color": "#082947",
        "border-bottom": "1px solid rgba(21, 222, 176, 1.00)"

      });
    }
    else {
      $(".navbar").css({
        "background-color": "transparent",
         "border-bottom": "0px solid rgba(21, 222, 176, 1.00)"
      });
    }
  });
})

$(function(){
  $(".smooth-scrollable").css("height", $(window).height());
})

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});





$(function() { 
  
  var windowHeight= $(window).height();
  if(windowHeight < 1000){
    $("body").addClass("");
  }
     
});


});

