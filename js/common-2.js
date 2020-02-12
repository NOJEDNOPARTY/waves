var common = {
	init: function() {
		common.main();
  },
	main: function() {
    $('.phone-mask').mask("+380(99)999-99-99");

    $('.menu-trigger').click(function(){
      $("header").toggleClass('open');
    });


    $("nav  a, .scroll-down, .form-call").click(function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top - 20}, 1500);
      $("header").removeClass('open');
    });
	}
};

(function() {
	common.init();
}());
