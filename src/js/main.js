$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'mozAnimationEnd',
        WebkitAnimation: 'webkitAnimationEnd',
      };

      for (var t in animations) {
        if (el.style[t] !== undefined) {
          return animations[t];
        }
      }
    })(document.createElement('div'));

    this.css({opacity:1}).addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);

      if (typeof callback === 'function') callback();
    });

    return this;
  },
});

function timeLine(){
	let rows = $('.platform .parts > .row'),
		redCont = $('.time-line'),
		container = $(redCont).find('.container');

	let n = $(rows).length,
		maxPos = $(rows).eq(n - 1).position().top;

	$(redCont).height(maxPos + 45);
	$(container).eq(n - 1).css({top: maxPos + 15});

	for(let i = 1; i < n; i++){

		let pos = $(rows).eq(i).position().top;
		$(container).eq(i).css({top: pos + 15})
	}
	

}
function myAnimation(anim){
	let elems = $('[data-js-animation = ' + anim +']');
	$(elems).each(function() {
		if(!$(this).hasClass("Stop-effect") &&
			$(this).is(":in-viewport")){

			$(this).addClass("Stop-effect");
			$(this).animateCss(anim);

		}
	});
}

timeLine();

$(document).scroll(function(){
	myAnimation('fadeInUp');
	myAnimation('fadeIn');
	myAnimation('bounceInLeft');
	myAnimation('bounceInRight');
})