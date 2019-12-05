$(window).scroll(function () {
   if ($(this).scrollTop() > 50) {
      $("#royals").css({
         'display': 'none'
      })
   } else {
      $("#royals").css({
         'display': 'block'
      })
   }
});