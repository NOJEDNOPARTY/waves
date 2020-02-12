var common = {
	init: function() {
		common.range();
		common.main();
  },
  range: function(){
    var valueBubble = '<output class="rangeslider__value-bubble" />';

    function updateValueBubble(pos, value, context) {
      pos = pos || context.position;
      value = value || context.value;
      var $valueBubble = $('.rangeslider__value-bubble', context.$range);
      var tempPosition = pos + context.grabPos;
      var position = (tempPosition <= context.handleDimension) ? context.handleDimension : (tempPosition >= context.maxHandlePos) ? context.maxHandlePos : tempPosition;

      if ($valueBubble.length) {
        $valueBubble[0].style.left = Math.ceil(position) + 'px';
        $valueBubble[0].innerHTML = value;
      }
    }
    if($('input[type="range"]')) {
      $('input[type="range"]').rangeslider({
        polyfill: false,
        onInit: function() {
          this.$range.append($(valueBubble));
          updateValueBubble(null, null, this);
        },
        onSlide: function(pos, value) {
          updateValueBubble(pos, value, this);
          if(value > '250') {
              $('.result-range-btns > div .rangeslider__value-bubble').css(
                  'margin-left', '-28px'
              )
          }else if(value == '0') {
            $('.result-range-btns > div .rangeslider__value-bubble').css(
                'margin-left', '-10px'
            )
          }else {
            $('.result-range-btns > div .rangeslider__value-bubble').css(
                'margin-left', '0'
            )
          }
        }
      });
    }

  },
	main: function() {
    $('.phone-mask').mask("+380(99)999-99-99");

    $('.lang').click(function(){
      $(this).toggleClass('active');
    });


    // var showMoreCases;
    // $('.btn-show-more-cases').click(function(e){
    //   e.preventDefault()
    //   if(!showMoreCases){
    //     $(this).parent().find('.cases').addClass('active');
    //     $(this).text('Меньше кейсов');
    //   }else {
    //     $(this).parent().find('.cases').removeClass('active');
    //     $(this).text('Больше кейсов');
    //   }
    //   showMoreCases = !showMoreCases;
    // });
  
    $(document).mouseup(function (e){
      var div = $(".lang");
      if (!div.is(e.target)
          && div.has(e.target).length === 0) {
        div.removeClass('active');
      }
    });

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
